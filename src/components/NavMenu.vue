<template>
    <q-menu transition-show="flip-right"
            transition-hide="flip-left"
            :offset="[0, 15]"
            content-style="background-color: #3aa6e3"
    >
        <q-list>
            <q-item v-if="isLoggedIn" clickable @click="navTo('/app')">
                <q-item-section avatar>
                    <q-icon name="home"/>
                </q-item-section>
                <q-item-section>
                    <q-item-label>HomePage</q-item-label>
                    <q-item-label caption>Show Homepage</q-item-label>
                </q-item-section>
            </q-item>

            <q-item v-if="!isLoggedIn" clickable @click="$router.push( {path: '/login'}).catch(err => {})">
                <q-item-section avatar>
                    <q-icon name="fingerprint"/>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Login</q-item-label>
                    <q-item-label caption>Retrieve account details</q-item-label>
                </q-item-section>
            </q-item>

            <q-item v-if="isLoggedIn" clickable @click="logout">
                <q-item-section avatar>
                    <q-icon name="exit_to_app"/>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Logout</q-item-label>
                    <q-item-label caption>Quit session</q-item-label>
                </q-item-section>
            </q-item>

            <q-item v-if="!isLoggedIn" clickable @click="$router.push( {path: '/register'}).catch(err => {})">
                <q-item-section avatar>
                    <q-icon name="code"/>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Register</q-item-label>
                    <q-item-label caption>Create new account</q-item-label>
                </q-item-section>
            </q-item>

            <q-item v-if="isLoggedIn" clickable @click="$router.push( {path: '/workout/create'}).catch(err => {})">
                <q-item-section avatar>
                    <q-icon name="add"/>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Create</q-item-label>
                    <q-item-label caption>Create a new workout</q-item-label>
                </q-item-section>
            </q-item>

            <q-item v-if="isLoggedIn" clickable @click="$router.push( {path: '/workout/show/raw'}).catch(err => {})">
                <q-item-section avatar>
                    <q-icon name="list_alt"/>
                </q-item-section>
                <q-item-section>
                    <q-item-label>List</q-item-label>
                    <q-item-label caption>View all logs</q-item-label>
                </q-item-section>
            </q-item>

            <q-item v-if="isLoggedIn" clickable @click="$router.push( {path: '/workout/show/grouped'}).catch(err => {})">
                <q-item-section avatar>
                    <q-icon name="assignment"/>
                </q-item-section>
                <q-item-section>
                    <q-item-label>List Grouped</q-item-label>
                    <q-item-label caption>Group logs by exercise type</q-item-label>
                </q-item-section>
            </q-item>

            <q-item v-if="isLoggedIn" clickable @click="$router.push( {path: '/workout/show/pb'}).catch(err => {})">
                <q-item-section avatar>
                    <q-icon name="assessment"/>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Personal Records</q-item-label>
                    <q-item-label caption>View best lifts</q-item-label>
                </q-item-section>
            </q-item>

            <q-item clickable @click="$router.push( {path: '/quote/add'}).catch(err => {})">
                <q-item-section avatar>
                    <q-icon name="list_alt"/>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Add a Quote</q-item-label>
                    <q-item-label caption>Focus your chi</q-item-label>
                </q-item-section>
            </q-item>

            <q-item v-if="isLoggedIn" clickable @click="$router.push( {path: '/support/contact'}).catch(err => {})">
                <q-item-section avatar>
                    <q-icon name="build"/>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Support</q-item-label>
                    <q-item-label caption>Contact the dev</q-item-label>
                </q-item-section>
            </q-item>

        </q-list>
    </q-menu>
</template>

<script>
    import {EventBus} from "../router"

    export default {
        name: "NavMenu",
        props: {
            isLoggedIn: {
                required: true,
                type: Boolean
            }
        },
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {
            logout() {
                window.sessionStorage.removeItem('jToken')
                this.$router.push( {path: '/login'}).catch(err => {})
            },
            navTo(href) {
                EventBus.$emit('hideHeader')
                this.$router.push( {path: href}).catch(err => {})
            }
        },
        created() {
            console.log('NavMenu isLoggedIn: (created)', this.isLoggedIn)
        },
        updated() {
            console.log('NavMenu isLoggedIn: (updated)', this.isLoggedIn)
        }
    }
</script>

<style scoped>

</style>