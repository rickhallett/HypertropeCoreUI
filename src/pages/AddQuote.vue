<template>
    <q-page class="flex ">
        <q-card v-show="showCard" flat bordered class="card q-ma-md">
            <q-card-section>
                <div class="text-h6 text-center">Add a Quote</div>
                <div class="text-secondary text-center">...to the community database!</div>
            </q-card-section>

            <q-card-section class="text-center text-secondary">
                <q-input v-model="quote.body" autogrow placeholder="Text..."/>
                <q-input v-model="quote.author" autogrow placeholder="Author..."/>
            </q-card-section>

            <q-card-section class="row justify-around">
                <q-icon v-if="!modelValid" name="subject" size="36px" color="positive"></q-icon>
                <q-icon v-if="modelValid" name="done" size="36px" color="positive" @click="saveQuote"></q-icon>
            </q-card-section>

            <transition appear
                        enter-active-class="animated jello"
                        leave-active-class="animated fadeOut">
                <div v-show="showLogo" class="flex flex-center">
                    <q-btn dense flat size="126px" icon="donut_small" color="yellow"/>
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
        name: "AddQuote",
        data() {
            return {
                loading: false,
                showCard: true,
                showLogo: false,
                quote: {
                    body: '',
                    author: ''
                }
            }
        },
        computed: {
            modelValid() {
                return this.quote.author.length && this.quote.body.length
            }
        },
        methods: {
            saveQuote() {
                const payload = {
                    body: `"${this.quote.body}"`,
                    author: this.quote.author
                }

                this.$axios.post(`${EventBus.$domain}/api/quote`, payload)
                    .then(res => {
                        if (res.status === 201) {
                            this.$q.notify({
                                message: 'Quote added',
                                color: 'green',
                                classes: 'notification'
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        this.$q.notify({
                            message: 'Error increasing Chi. Contact dev',
                            color: 'red',
                            classes: 'notification'
                        })
                    })
            }
        },
        beforeCreate() {
            if (window.outerWidth > 420) {
                this.$router.push({ path: '/noview' }).catch(err => {})
            }
        },
        created() {
            setTimeout(() => this.showLogo = true, 250)
        }
    }
</script>

<style>
    .card {
        min-width: 92%;
        min-height: 85vh;
    }

    .post-notify {
        text-align: center;
    }
</style>
