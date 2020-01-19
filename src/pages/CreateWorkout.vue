<template>
    <q-page class="flex flex-center">
        <q-card v-show="showCard" flat bordered class="card q-ma-md">
            <q-card-section>
                <div class="text-h6 text-center">Log Your Focus...</div>
            </q-card-section>

            <q-card-section class="">
<!--                <q-select dense options-cover v-model="workout.selectedExercise" :options="exercisesAvailable"></q-select>-->
                <q-btn  :icon="showExercises ? 'expand_more' : 'chevron_right'" class="full-width" @click="showExercises = !showExercises">Select Exercise</q-btn>
                <q-slide-transition>
                    <q-option-group
                        v-show="showExercises"
                        v-model="workout.selectedExercise"
                        :options="exercisesAvailable"
                        color="primary"
                    />
                </q-slide-transition>

            </q-card-section>

            <div v-for="(set, i) in workout.sets" class="q-gutter-sm">

                <q-card-section class="q-py-sm row justify-around">
                    <div>
                        <q-card-section class="text-primary set-number">
                            {{i + set.abbrev}}
                        </q-card-section>
                        </div>
                    <div>
                        <q-input dense v-model="set.weight" label="Weight" suffix="kg" type="number"></q-input>
                        <q-input dense v-model="set.reps" label="Reps" type="number"></q-input>
                    </div>

                </q-card-section>

                <div class="row q-mb-lg">
                    <q-separator color="blue" :inset="true" class="q-mt-lg set-separator"/>
                    <q-icon name="donut_small" color="blue" size="18px" class="q-pr-md q-pt-lg"></q-icon>
                </div>

            </div>

            <q-card-section v-show="workout.sets.length > 0">
                <q-input v-model="workout.notes" autogrow placeholder="Notes..."/>
            </q-card-section>

            <q-card-section class="row justify-around">
                <q-icon name="delete_outline" size="36px" color="negative" class="q-mr-md" @click="removeLastSet"></q-icon>
                <q-icon v-show="workout.selectedExercise" name="add" size="36px" class="q-mr-md" @click="addNewSet"></q-icon>
                <q-icon name="done" size="36px" color="positive" @click="saveWorkout"></q-icon>
            </q-card-section>

            <q-space/>
<!--            q-field row no-wrap items-start q-select q-field&#45;&#45;auto-height q-select&#45;&#45;without-input q-field&#45;&#45;standard q-field&#45;&#45;dense q-field&#45;&#45;dark-->
<!--            q-field row no-wrap items-start q-select q-field&#45;&#45;auto-height q-select&#45;&#45;without-input q-field&#45;&#45;standard q-field&#45;&#45;float q-field&#45;&#45;dense q-field&#45;&#45;dark-->

            <transition appear
                        enter-active-class="animated fadeIn"
                        leave-active-class="animated fadeOut">
                <div v-show="showLogo" class="flex flex-center">
                    <q-icon dense flat size="190px" name="donut_small" color="blue"/>
                </div>
            </transition>

        </q-card>

        <q-inner-loading :showing="loading">
            <q-spinner-tail size="50px" color="primary"/>
        </q-inner-loading>

    </q-page>
</template>

<script>
export default {
    name: "CreateWorkout",
    data() {
        return {
            quotes: null,
            loading: false,
            showCard: true,
            showLogo: false,
            showExercises: false,
            exercisesAvailable: [],
            workout: {
                selectedExercise: null,
                sets: [],
                notes: null
            }
        }
    },
    computed: {
        // TODO: find a way to validate data client side, this doesn't work
        dataValid() {
            if (this.workout.sets.length <= 0) return false

            this.workout.sets.forEach(set => {
                if (typeof set.weight === 'number') return false
                if (typeof set.reps === 'number') return false
            })

            return true
        }
    },
    methods: {
        addNewSet() {
            if (this.showExercises) this.showExercises = false
            this.workout.sets.push({
                exercise: this.workout.selectedExercise,
                weight: null,
                reps: null,
                abbrev: this.getAbbrev(this.workout.selectedExercise)
            })
        },
        removeLastSet() {
            this.workout.sets.pop()
        },
        saveWorkout() {
            console.log('sending data:', this.workout)

            const payload = {
                sets: this.workout.sets.map(set => {
                    return {
                        exercise: set.exercise,
                        weight: Number.parseInt(set.weight),
                        reps: Number.parseInt(set.reps)
                    }
                }),
                notes: this.workout.notes
            }

            this.$axios.post('https://localhost:5001/api/workout', payload)
                .then(res => {
                    console.log(res)
                    if (res.status === 200) {
                        this.$q.notify({
                            message: 'Workout saved successfully',
                            color: 'positive',
                            position: 'bottom'
                        })
                    }
                    this.workout = {
                        selectedExercise: null,
                        sets: [],
                        notes: null
                    }
                }).catch(err => {
                    this.$q.notify({
                        message: 'Error: please let the dev know!',
                        color: 'negative',
                        position: 'bottom'
                    })
                    console.log(err)
                })
        },
        getAbbrev(exerciseId) {
            return this.exercisesAvailable.find(e => e.value === exerciseId).abbrev
        }
    },
    created() {
        setTimeout(() => this.showLogo = true, 500)

        this.$axios.get('https://localhost:5001/api/exercise').then(res => {
            console.log(res)
            this.exercisesAvailable = res.data.exercises.map(ex => {
                return {
                    label: ex.name,
                    value: ex.name,
                    id: ex.exerciseId,
                    abbrev: ex.abbreviation
                }
            })
            console.log('exercises available:', this.exercisesAvailable)
        })

        // for (var i = 0; i<3;i++){
        //     this.addNewSet()
        // }
    }
}
</script>

<style>
    .card {
        min-width: 92%;
        min-height: 87vh;
    }

    .set-separator {
        height: 2px;
    }

    .set-number {
        font-size: 34px;
    }

    .xxx {
        display: none;
    }

    .log-logo--dimmed {
        opacity: 0.2;
    }

    /*.log-logo:hover {*/
    /*    opacity: 1;*/
    /*}*/
</style>
