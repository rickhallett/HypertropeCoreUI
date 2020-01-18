<template>
    <q-page class="flex ">
        <q-card v-show="showCard" flat bordered class="card q-ma-md">
            <q-card-section>
                <div class="text-h6 text-center">Welcome to Hypertrope Core!</div>
            </q-card-section>

            <q-card-section class="text-center">
                <transition-group
                    appear
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut"
                >
                    <div v-for="(quote, index) in quoteSelection" :key="index">
                        <quote-card :author="quote.author" :body="quote.body"></quote-card>
                    </div>
                </transition-group>
            </q-card-section>

            <transition appear
                        enter-active-class="animated jello"
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
    import QuoteCard from "../components/QuoteCard";

    export default {
        name: 'PageIndex',
        components: {
            QuoteCard
        },
        data() {
            return {
                quotes: null,
                loading: true,
                showCard: false,
                showLogo: false
            }
        },
        methods: {
            getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max))
            }
        },
        computed: {
            quoteSelection() {
                if (this.quotes) {
                    let clone = this.quotes.slice()
                    let twoQuotes = []
                    twoQuotes.push(clone.splice(this.getRandomInt(clone.length), 1)[0])
                    twoQuotes.push(clone.splice(this.getRandomInt(clone.length), 1)[0])
                    return twoQuotes
                }
            }
        },
        beforeCreate() {
            setTimeout(() => {
                this.$axios.get('https://localhost:5001/api/quote')
                    .then(res => {
                        this.quotes = res.data.quotes
                        this.loading = false
                        this.showCard = true
                        setTimeout(() => this.showLogo = true, 500)
                    })
            }, 1000)

        },
        created() {

        }
    }
</script>

<style>
    .card {
        min-width: 92%;
    }
</style>
