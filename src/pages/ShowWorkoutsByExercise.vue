<template>
    <q-page class="flex ">
        <q-card v-show="showCard" flat bordered class="card q-ma-md">
            <q-card-section>
                <div class="text-h6 text-center">Logs By Exercise</div>
            </q-card-section>

            <q-card-section class="text-center">

            </q-card-section>

            <transition appear
                        enter-active-class="animated fadeInUp"
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
    export default {
        name: "ShowWorkoutsByExercise",
        data() {
            return {
                loading: false,
                showCard: true,
                showLogo: false,
                rawData: null
            }
        },
        created() {
            setTimeout(() => this.showLogo = true, 1000)

            this.$axios.get('https://localhost:5001/api/workout').then(res => {
                console.log('response:', res)
                this.rawData = res.data.data
                console.log(this.rawData)
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
