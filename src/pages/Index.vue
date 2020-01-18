<template>
    <q-page class="flex ">
        <q-card flat bordered class="my-card q-ma-md">
            <q-card-section>
                <div class="text-h6">Welcome to Hypertrope Core!</div>
            </q-card-section>

            <div v-for="(quote, index) in quoteSelection" :key="index">
                <quote-card :author="quote.author" :body="quote.body"></quote-card>
            </div>

            <q-separator inset />

            <div class="flex flex-center">
                <q-btn dense flat size="132px" icon="donut_small" color="blue"/>
            </div>


        </q-card>
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
                quotes: null
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
            this.$axios.get('https://localhost:5001/api/quote')
                .then(res => {
                    this.quotes = res.data.quotes
                    console.log(this.quotes)
                    console.log(this.quotes[0].author)
                })
        },
        created() {

        }
    }
</script>
