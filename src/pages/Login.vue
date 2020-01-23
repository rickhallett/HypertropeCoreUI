<template>
  <q-page class="flex ">
    <q-card v-show="showCard" flat bordered class="card q-ma-md">
      <q-card-section>
        <div class="text-h6 text-center">Welcome to Hypertrope Core!</div>
        <div class="text-h6 text-center text-secondary">Please login</div>
      </q-card-section>

      <q-card-section class="text-center q-mt-md">
        <transition-group
                appear
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
        >
          <q-input dense v-model="user.username" placeholder="Username" :key="'username'"></q-input>
          <q-input dense v-model="user.password" placeholder="Password" :key="'password'" type="password"></q-input>

          <q-btn v-if="serverAvailable" icon="fingerprint" color="blue" :key="'icon'" size="18px" class="q-mt-md" @click="login"></q-btn>
          <q-btn v-if="!serverAvailable" icon="fingerprint" color="red" :key="'icon'" size="18px" class="q-mt-md" @click="noLogin"></q-btn>

        </transition-group>
      </q-card-section>

      <transition appear
                  enter-active-class="animated jello"
                  leave-active-class="animated fadeOut">
        <div v-show="showLogo" class="flex flex-center">
          <q-btn dense flat size="132px" icon="donut_small" color="blue"></q-btn>
        </div>
      </transition>

    </q-card>

    <q-inner-loading :showing="loading">
      <q-spinner-tail size="50px" color="primary"></q-spinner-tail>
    </q-inner-loading>

  </q-page>
</template>

<script>
  import {EventBus} from "../router"

  export default {
    name: 'PageIndex',
    components: {

    },
    data() {
      return {
        serverAvailable: false,
        loading: true,
        showCard: false,
        showLogo: false,
        user: {
          username: null,
          password: null
        }
      }
    },
    methods: {
      noLogin() {
        this.$q.notify({
          message: 'Server not available',
          color: 'red',
          classes: 'notification'
        })
      },
      login() {
        this.$axios.post(`${EventBus.$domain}/api/auth/login`, this.user)
            .then(res => {
              if (res.status === 200) {
                console.log(res)
                const jToken = res.data.token
                window.sessionStorage.setItem('jToken', jToken)
                this.$router.push({ path: 'app' }).catch(err => err)
              }
            })
            .catch(err => {
              console.log(err)

              // if (err.message === "Network Error") {
              //   this.$q.notify({
              //     message: 'Server down for maintenance',
              //     color: 'red',
              //     classes: 'notification'
              //   })
              //   return
              // }

              this.$q.notify({
                message: 'Incorrect username/password',
                color: 'red',
                classes: 'notification'
              })
            })
      }
    },
    computed: {},
    beforeCreate() {
      console.log(`Communicating with server endpoint @ ${EventBus.$domain}/api/quote`)

      setTimeout(() => {
        this.loading = false
        this.showCard = true
      }, 500)
    },
    created() {
      EventBus.$emit('loggedOut')

      this.$axios.post(`${EventBus.$domain}/api/ping`)
          .then(res => {
            if (res.status === 200) {
              this.serverAvailable = true
            }
          })
    }
  }
</script>

<style>
  .card {
    min-width: 92%;
  }


</style>
