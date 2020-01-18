<template>

</template>

<script>
    export default {
        name: "ShowWorkouts",
        created() {
            this.$axios.get('https://localhost:5001/api/workout').then(res => console.log(res));
        }
    }
</script>

<style scoped>

</style>
