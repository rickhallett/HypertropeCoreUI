<template>
    <q-layout view="lHh Lpr lFf" dark>
        <transition appear
            appear-active-class="animated slideInDown"
            leave-active-class="animated slideOutUp">

            <q-header elevated>
                <q-bar style="height: 50px;">
                    <q-btn dense flat size="16px" icon="donut_small" @click="toggleDarkMode"></q-btn>
                    <div v-show="showTitle" class="text-weight-bold text-secondary app-header row" @click="navToHome">
                        <div class="app-header--hyper">Hypertrope</div>
                        <div class="app-header--core">Core</div>
                    </div>
                    <div v-show="!showTitle" class="text-weight-bold text-secondary">
                        <q-input dense autofocus clearable v-model="search"
                                 filled type="search" placeholder="Search..."
                                 @blur="showTitle = true">
                        </q-input>
                    </div>
                    <q-space/>
                    <q-btn dense flat size="16px" icon="search" @click="showTitle = !showTitle"></q-btn>

                    <q-btn dense flat size="16px" icon="list">
                        <nav-menu :is-logged-in="isLoggedIn"></nav-menu>
                    </q-btn>
                </q-bar>
            </q-header>

        </transition>

        <q-page-container >
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
    import NavMenu from "../components/NavMenu";
    import {EventBus} from "../router";

    export default {
        name: 'MyLayout',
        components: {
            NavMenu
        },
        data() {
            return {
                showTitle: true,
                showHeader: true,
                search: '',
                isLoggedIn: false
            }
        },
        methods: {
            toggleDarkMode() {
                this.$q.dark.toggle()
            },
            navToHome() {
                this.$router.push( {path: '/app'}).catch(err => {})
            },
            loggedIn() {
                console.log('flipping logged in switch to on')
                this.isLoggedIn = true
            },
            loggedOut() {
                console.log('flipping logged in switch to off')
                this.isLoggedIn = false
            }
        },
        computed: {

        },
        beforeCreate() {
            if (window.location.href.split(':')[1] === '//localhost') {
                EventBus.$domain = 'https://localhost:5001'
            } else {
                EventBus.$domain = 'https://hypertropecore3.azurewebsites.net'
            }

            this.$axios.interceptors.request.use(
                (config) => {
                    let token = sessionStorage.getItem('jToken');

                    if (token) {
                        config.headers['Authorization'] = `Bearer ${token}`
                    }

                    return config
                },

                (error) => {
                    return Promise.reject(error)
                }
            )

            if (window.outerWidth > 420) {
                this.$router.push({ path: '/noview' }).catch(err => {})
            }
        },
        created() {
            EventBus.$on('loggedIn', this.loggedIn)
            EventBus.$on('loggedOut', this.loggedOut)
            EventBus.$on('hideHeader', () => this.showHeader = false)
            EventBus.$on('showHeader', () => this.showHeader = true)
        }
    }
</script>

<style>
    div > .app-header {
        font-size: 18px;
    }

    .app-header--core {
        font-size: 10px;
        font-weight: bolder;
        color: #3aa6e3;
        padding-left: 2px;
    }

    .notification {
        text-align: center;
    }
</style>
