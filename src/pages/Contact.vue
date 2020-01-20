<template>
    <q-page class="flex ">
        <q-card v-show="showCard" flat bordered class="card q-ma-md">
            <q-card-section>
                <div class="text-h6 text-center">Contact</div>
            </q-card-section>

            <q-card-section class="text-center text-secondary">
                Coming Soon...
            </q-card-section>

            <transition appear
                        enter-active-class="animated jello"
                        leave-active-class="animated fadeOut">
                <div v-show="showLogo" class="flex flex-center">
                    <q-btn dense flat size="132px" icon="donut_small" color="green"/>
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
        name: "Contact",
        data() {
            return {
                loading: false,
                showCard: true,
                showLogo: false,
                rawData: null
            }
        },
        beforeCreate() {
            if (window.outerWidth > 420) {
                this.$router.push({ path: '/noview' }).catch(err => {})
            }
        },
        created() {
            setTimeout(() => this.showLogo = true, 250)

            this.$axios.get(`${this.$domain}/api/workout`).then(res => {
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
