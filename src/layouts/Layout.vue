<template>
    <q-layout view="lHh Lpr lFf" dark>
        <q-header elevated>

            <q-bar style="height: 50px;">
                <q-btn dense flat size="16px" icon="donut_small" @click="toggleDarkMode"/>
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
                <q-btn dense flat size="16px" icon="search" @click="showTitle = !showTitle"/>
                <q-btn dense flat size="16px" icon="list">
                    <q-menu transition-show="flip-right"
                            transition-hide="flip-left"
                            :offset="[0, 15]"
                            content-style="background-color: #3aa6e3"
                    >
                        <q-list>
                            <q-item clickable @click="$router.push( {path: '/'}).catch(err => {})">
                                <q-item-section avatar>
                                    <q-icon name="home"/>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>HomePage</q-item-label>
                                    <q-item-label caption>Show Homepage</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item clickable @click="$router.push( {path: '/workout/create'}).catch(err => {})">
                                <q-item-section avatar>
                                    <q-icon name="add"/>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>Create</q-item-label>
                                    <q-item-label caption>Create a new workout</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item clickable @click="$router.push( {path: '/workout/show/raw'}).catch(err => {})">
                                <q-item-section avatar>
                                    <q-icon name="list_alt"/>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>List</q-item-label>
                                    <q-item-label caption>View all logs</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item clickable @click="$router.push( {path: '/workout/show/grouped'}).catch(err => {})">
                                <q-item-section avatar>
                                    <q-icon name="assignment"/>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>List Grouped</q-item-label>
                                    <q-item-label caption>Group logs by exercise type</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item clickable @click="$router.push( {path: '/workout/show/pb'}).catch(err => {})">
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
                            <q-item clickable @click="$router.push( {path: '/support/contact'}).catch(err => {})">
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

                </q-btn>

            </q-bar>


        </q-header>


        <q-page-container style="max-width: 375px">
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
    export default {
        name: 'MyLayout',
        data() {
            return {
                showTitle: true,
                search: ''
            }
        },
        methods: {
            toggleDarkMode() {
                this.$q.dark.toggle()
            },
            navToHome() {
                this.$router.push({ path: '/' }).catch(err => {})
            }
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
</style>
