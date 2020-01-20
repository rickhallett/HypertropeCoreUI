<template>
    <q-page class="text-center page q-pa-xl">
        <p class="text-h4 text-blue">Please come back on a mobile device!</p>
        <transition appear
                    enter-active-class="animatedjello"
                    leave-active-class="animated fadeOut">
            <q-icon name="phonelink_lock" size="50px"></q-icon>
        </transition>

        <p class="text-secondary text-blue q-pt-md">www.hypertrope.org.uk</p>
    </q-page>
</template>

<script>
    export default {
        name: "Warn"
    }
</script>

<style scoped>
    .page {
        opacity: 0.7;
    }

    /*.animated.jello {*/
    /*    animation-iteration-count: infinite;*/
    /*}*/
</style>