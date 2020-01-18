<template>
    <q-page class="">
        <q-card v-show="showCard" flat bordered class="card q-ma-md">
            <q-card-section>
                <div class="text-h6 text-center">Log Your Focus...</div>
            </q-card-section>

            <q-card-section class="text-center q-gutter-sm">
                <q-select dense v-model="workout.selectedExercise" :options="exercisesAvailable" label="Exercise"></q-select>
            </q-card-section>

            <div v-for="(set, i) in workout.sets" class="q-gutter-sm">

                <q-card-section class="q-py-sm" label="">
                    <q-input dense v-model="set.weight" :label="'Weight: Set( ' + (i + 1) + ' )'"></q-input>
                    <q-select dense v-model="set.reps" :options="reps" label="Reps"></q-select>
                </q-card-section>

                <div class="row q-mb-xl">
                    <q-separator color="blue" :inset="true" class="q-mt-lg set-separator"/>
                    <q-icon name="donut_small" color="blue" size="18px" class="q-pr-md q-pt-lg"></q-icon>
                </div>

            </div>

            <q-card-section class="text-center">
                <q-icon name="add" size="20px" @click="addNewSet"></q-icon>
            </q-card-section>

<!--            <q-space/>-->

<!--            <transition appear-->
<!--                        enter-active-class="animated fadeIn"-->
<!--                        leave-active-class="animated fadeOut">-->
<!--                <div v-show="showLogo" class="flex flex-center log-logo" >-->
<!--                    <q-btn dense flat size="132px" icon="donut_small" color="blue"/>-->
<!--                </div>-->
<!--            </transition>-->

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
            exercisesAvailable: [],
            workout: {
                selectedExercise: null,
                sets: []
            },
            selectedReps: null,
            selectedWeight: null,
            reps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],

        }
    },
    methods: {
        addNewSet() {
            this.workout.sets.push({
                weight: null,
                reps: null
            })
        }
    },
    created() {
        setTimeout(() => this.showLogo = true, 500)

        this.$axios.get('https://localhost:5001/api/exercise').then(res => {
            console.log(res)
            this.exercisesAvailable = res.data.exercises.map(ex => {
                return {
                    label: ex.name,
                    value: ex.exerciseId
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

    /*.log-logo {*/
    /*    opacity: 0.2;*/
    /*}*/

    /*.log-logo:hover {*/
    /*    opacity: 1;*/
    /*}*/
</style>
