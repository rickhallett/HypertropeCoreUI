<template>
    <q-page class="flex ">
        <q-card v-show="showCard" flat bordered class="card q-ma-md">
            <q-card-section>
                <div class="text-h6 text-center">Raw Logs</div>
            </q-card-section>

            <q-card-section class="text-center">
                <q-table
                    title="Workouts"
                    :data="rawData"
                    :columns="workoutColumns"
                    :pagination.sync="pagination"
                    row-key="name"
                    no-data-label="No data. You need to workout more."
                >
                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td key="created" :props="props">
                                <q-badge color="green">
                                    {{ formatDate(props.row.created) }}
                                </q-badge>
                            </q-td>
                            <q-td key="totalVolume" :props="props">
                                <q-badge color="blue">
                                    {{ formatVolume(props.row.totalVolume) }}
                                </q-badge>
                            </q-td>
                            <q-td key="averageOneRm" :props="props">
                                <q-badge color="red">
                                    {{ formatOneRm(props.row.averageOneRm) }}
                                </q-badge>
                            </q-td>
                        </q-tr>
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
                workoutColumns: [
                    {name: 'created', label: 'Date', field: 'created', sortable: true},
                    {name: 'totalVolume', label: 'Total Volume', field: 'totalVolume', sortable: true},
                    {name: 'averageOneRm', label: 'Average 1RM', field: 'averageOneRm', sortable: true}
                ],
                setColumns: [
                    {name: '', label: '', field: '', sortable: true},
                    {name: '', label: '', field: '', sortable: true},
                    {name: '', label: '', field: '', sortable: true},
                ],
                pagination: {
                    sortBy: 'desc',
                    descending: false,
                    page: 2,
                    rowsPerPage: 3,
                    rowsNumber: 26
                }
            }
        },
        methods: {
            formatDate(rawDate) {
                // return moment(rawDate).format('DD-MM-YYYY hh:mm')
                return 1
            },
            formatVolume(rawVolume) {
                return Math.floor(rawVolume)
            },
            formatOneRm(rawOneRm) {
                return Math.floor(rawOneRm)
            }
        },
        beforeCreate() {
            this.$axios.get('https://localhost:5001/api/workout/grouped/date').then(res => {
                this.rawData = res.data.data
                console.log('raw data:', this.rawData)
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
