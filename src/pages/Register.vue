<template>
  <q-page class="flex ">
    <q-card v-show="showCard" flat bordered class="card q-ma-md">
      <q-card-section>
        <div class="text-h6 text-center">Welcome to Hypertrope Core!</div>
        <div class="text-h6 text-center text-secondary">Please register</div>
      </q-card-section>

      <q-card-section class="text-center q-my-md">
        <transition-group
                appear
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
        >
          <q-input dense v-model="user.firstname" placeholder="First name" :key="'firstname'"></q-input>
          <q-input dense v-model="user.lastname" placeholder="Last name" :key="'lastname'"></q-input>
          <q-input dense v-model="user.username" placeholder="Username" :key="'username'"></q-input>
          <q-input dense v-model="user.password" placeholder="Password" type="password" :key="'password'"></q-input>
          <q-input dense v-model="user.email" placeholder="Email" :key="'email'"></q-input>
          <q-input dense v-model="user.phonenumber" placeholder="Phone number" :key="'phonenumber'"></q-input>

          <q-btn v-if="buttonReady" icon="fingerprint" color="blue" @click="register" size="18px" :key="'register'" class="q-mt-md"></q-btn>
          <q-btn v-if="!buttonReady" icon="fingerprint" color="orange" @click="register" size="18px" :key="'register'" class="q-mt-md"></q-btn>

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
    name: 'Register',
    components: {

    },
    data() {
      return {
        loading: true,
        showCard: false,
        showLogo: false,
        buttonReady: true,
        user: {
          firstname: null,
          lastname: null,
          username: null,
          email: null,
          phonenumber: null,
          password: null,
          roles: ["User"]
        }
      }
    },
    methods: {
      register() {
        if (this.buttonReady) {
          this.buttonReady = false
          this.$axios.post(`${EventBus.$domain}/api/auth/register`, this.user)
              .then(res => {
                console.log(res)

                setTimeout(() => this.buttonReady = true, 3000)

                if (res.status === 201) {
                  this.$q.notify({
                    message: 'Register successful',
                    color: 'green',
                    classes: 'notification'
                  })
                  setTimeout(() => {
                    this.$router.push({ path: '/app' })
                  }, 1000)
                }
              })
              .catch(err => {
                console.log(err)

                setTimeout(() => this.buttonReady = true, 3000)

                if (err.response.status === 400) {
                  for (let errorType in err.response.data) {
                    if(err.response.data.hasOwnProperty(errorType)) {
                      err.response.data[errorType].forEach(error => {
                        this.$q.notify({
                          message: error,
                          color: 'red',
                          classes: 'notification'
                        })
                      })
                    }
                  }
                }
              })
        }


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

    }
  }
</script>

<style>
  .card {
    min-width: 92%;
  }
</style>
