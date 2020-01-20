<template>
    <q-layout view="lHh Lpr lFf" dark>
        <q-page-container>
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
    export default {
        name: 'NoLayout',
        data() {
            return {}
        },
        methods: {},
        beforeCreate() {
            if (window.outerWidth < 420) {
                this.$router.push({ path: '/app' }).catch(err => {})
            }
        },
        created() {}
    }
</script>

<style>

</style>
