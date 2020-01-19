<template>
    <q-page class="flex ">
        <q-card v-show="showCard" flat bordered class="card q-ma-md">
            <q-card-section>
                <div class="text-h6 text-center">Raw Logs</div>
            </q-card-section>

            <q-card-section class="">
                <q-table
                    grid
                    title="Workouts"
                    :data="formattedData"
                    :columns="workoutColumns"
                    :pagination.sync="pagination"
                    row-key="name"
                    no-data-label="No data. You need to workout more."
                    hide-header
                    hide-bottom
                >
                    <template v-slot:item="props">
                        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
                            <q-card class="">
                                <q-list dense>
                                    <q-item v-for="col in props.cols" :key="col.name">
                                        <q-item-section v-if="col.label !== 'Sets'">
                                            <q-item-label>{{ col.label }}</q-item-label>
                                        </q-item-section>
                                        <q-item-section v-else style="font-size: 10px; text-align: end">
                                            <q-list v-for="(set, i) in col.value" :key="'set' + i">
                                                <q-list v-for="(key, j) in Object.keys(set)" :key="'key' + j">
                                                    {{key}}
                                                </q-list>
                                                <q-separator />
                                            </q-list>
                                        </q-item-section>
                                        <q-item-section side v-if="col.label !== 'Sets'">
                                            <q-item-label caption>{{ col.value }}</q-item-label>
                                        </q-item-section>
                                        <q-item-section v-else style="font-size: 10px; ">
                                            <q-list v-for="(set, k) in col.value" :key="'setval' + k">
                                                <q-list v-for="(val, l) in Object.values(set)" style="color: #3aa6e3" :key="'val' + l">
                                                    {{val}}
                                                </q-list>
                                                <q-separator />
                                            </q-list>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-card>

                            <q-separator class="q-mt-xs" color="blue"/>
                        </div>
                    </template>

                </q-table>

            </q-card-section>

            <transition appear
                        enter-active-class="animated fadeInUp"
                        leave-active-class="animated fadeOut">
                <div v-show="showLogo" class="flex flex-center">
                    <q-btn dense flat size="132px" icon="donut_small" color="blue"/>
                </div>
            </transition>

        </q-card>

        <q-inner-loading :showing="loading">
            <q-spinner-tail size="50px" color="primary" />
        </q-inner-loading>

    </q-page>
</template>

<script>
    import moment from 'moment';

    export default {
        name: "ShowWorkouts",
        data() {
            return {
                loading: false,
                showCard: true,
                showLogo: false,
                rawData: [],
                formattedData: [],
                workoutColumns: [
                    {name: 'created', label: 'Date', field: 'created', sortable: true},
                    {name: 'totalVolume', label: 'Total Volume', field: 'totalVolume', sortable: true},
                    {name: 'averageOneRm', label: 'Average 1RM', field: 'averageOneRm', sortable: true},
                    {name: 'sets', label: 'Sets', field: 'sets'}
                ],
                setColumns: [
                    {name: 'exercise', label: 'Exercise', field: 'exercise'},
                    {name: 'weight', label: 'Weight', field: 'weight'},
                    {name: 'reps', label: 'Reps', field: 'reps'},
                    {name: 'volume', label: 'Volume', field: 'volume'},
                    {name: 'oneRm', label: '1RM', field: 'oneRm'},
                ],
                pagination: {
                    // sortBy: 'desc',
                    // descending: false,
                    // page: 2,
                    // rowsPerPage: 3,
                    rowsNumber: null
                }
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
            this.$axios.get('https://localhost:5001/api/workout/grouped/date').then(res => {
                this.rawData = res.data.data
                console.log('raw data:', this.rawData)
                this.formattedData = this.rawData.map(w => {
                    // debugger
                    return {
                        created: this.formatDate(w.created),
                        totalVolume: this.formatVolume(w.totalVolume),
                        averageOneRm: this.formatOneRm(w.averageOneRm),
                        sets: w.sets.map(s => {
                            return {
                                Exercise: s.exercise,
                                Weight: s.weight,
                                Reps: s.reps,
                                Volume: s.volume,
                                '1RM': this.formatOneRm(s.oneRm)
                            }
                        })
                    }
                })
                console.log('formatted data:', this.formattedData)

            });

            this.$axios.get('https://localhost:5001/api/workout/count').then(res => {
                this.pagination.rowsNumber = res.data.workoutCount
                console.log('pagination.rowsNumber:', this.pagination.rowsNumber)
            });
        },
        created() {
            setTimeout(() => this.showLogo = true, 1000)



        }
    }
</script>

<style>
    .card {
        min-width: 92%;
        min-height: 87vh;
    }

    .workout-table {
        font-size: 4px;
    }
</style>
