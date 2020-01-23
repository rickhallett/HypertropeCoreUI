<template>
    <q-page class="flex ">
        <q-card v-show="showCard" flat bordered class="card q-ma-md">
            <q-card-section>
                <div class="text-h6 text-center">Logs By Exercise</div>
            </q-card-section>

            <q-card-section class="text-center">
                <q-list v-for="(exercise, eIndex) in formattedData" :key="'ex' + eIndex">
                    <q-item v-if="exercise.Sets.length > 0" class="row justify-start" style="max-width: 150px" clickable @click="exercise.Active = !exercise.Active">
                        <q-item-section avatar>
                            <q-icon v-if="!exercise.Active" name="chevron_right"></q-icon>
                            <q-icon v-else name="expand_more"></q-icon>
                        </q-item-section>
                        <q-item-section>{{exercise.Name}}</q-item-section>
                    </q-item>
                    <q-list v-if="exercise.Active" v-for="(set, sIndex) in exercise.Sets" :key="'set' + sIndex">
                        <q-item>
                            <q-item-section style="color: #9ddeeb; font-size: 20px;">{{sIndex + 1}}</q-item-section>
                            <q-item-section style="font-size: 11px; text-align: end">
                                <q-list v-for="(key, kIndex) in Object.keys(set)" :key="'key' + kIndex">
                                    {{key}}
                                </q-list>
                            </q-item-section>
                            <q-item-section style="font-size: 11px; text-align: start">
                                <q-list v-for="(val, vIndex) in Object.values(set)" :key="'val' + vIndex" style="color: #3aa6e3">
                                    {{val}}
                                </q-list>
                            </q-item-section>
                        </q-item>
                    </q-list>
                    <q-separator v-if="exercise.Sets.length > 0" class="q-mt-xs" color="blue"/>
                </q-list>
            </q-card-section>

            <transition appear
                        enter-active-class="animated jello"
                        leave-active-class="animated fadeOut">
                <div v-show="showLogo" class="flex flex-center">
                    <q-btn dense flat size="132px" icon="donut_small" color="orange"/>
                </div>
            </transition>

        </q-card>

        <q-inner-loading :showing="loading">
            <q-spinner-tail size="50px" color="primary" />
        </q-inner-loading>

    </q-page>
</template>

<script>
    import moment from 'moment'

    export default {
        name: "ShowWorkoutsByExercise",
        data() {
            return {
                loading: false,
                showCard: true,
                showLogo: false,
                rawData: [],
                formattedData: []
            }
        },
        methods: {
            inspect(val) {
                debugger;
            },
            formatDate(rawDate) {
                return moment(rawDate).format('DD-MM-YYYY HH:mm')
            },
            formatVolume(rawVolume) {
                return Math.floor(rawVolume)
            },
            formatOneRm(rawOneRm) {
                return Number.parseFloat(rawOneRm).toFixed(2)
            }
        },
        beforeCreate() {
            if (window.outerWidth > 420) {
                this.$router.push({ path: '/noview' }).catch(err => {})
            }
        },
        created() {
            setTimeout(() => this.showLogo = true, 250)

            this.$axios.get(`${EventBus.$domain}/api/workout/grouped/exercise`).then(res => {
                this.rawData = res.data.data.exercises
                console.log('raw data:', this.rawData)

                this.rawData.forEach(exercise => {
                    this.formattedData.push({
                        Name: exercise.name,
                        Active: false,
                        Sets: exercise.sets.map(set => {
                            return {
                                Date: this.formatDate(set.created),
                                Exercise: set.exercise,
                                Weight: set.weight,
                                Reps: set.reps,
                                Volume: this.formatVolume(set.volume),
                                '1RM': this.formatOneRm(set.oneRm)

                            }
                        })
                    })
                })

                console.log(this.formattedData)
            });
        }
    }
</script>

<style>
    .card {
        min-width: 92%;
        min-height: 87vh;
    }
</style>
