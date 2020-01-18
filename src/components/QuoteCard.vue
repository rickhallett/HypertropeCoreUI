<template>
    <div>
        <q-card-section class="q-pt-none">
            “{{body}}.”
            <span style="font-weight: bolder">~ {{author}}</span>
        </q-card-section>
        <q-separator inset />
    </div>
</template>

<script>
    export default {
        name: "QuoteCard",
        props: {
            body: {
                required: true,
                type: String
            },
            author: {
                required: true,
                type: String
            }
        }
    }
</script>

<style scoped>

</style>