<template>
  <q-page class="flex ">
    <q-card v-show="showCard" flat bordered class="card q-ma-md">
      <q-card-section>
        <div class="text-h6 text-center">Welcome to Hypertrope Core!</div>
        <div class="text-h6 text-center">Please register</div>
      </q-card-section>

      <q-card-section class="text-center">
        <transition-group
                appear
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
        >
          <q-input dense v-model="user.firstname" placeholder="First name"></q-input>
          <q-input dense v-model="user.lastname" placeholder="Last name"></q-input>
          <q-input dense v-model="user.username" placeholder="Username"></q-input>
          <q-input dense v-model="user.password" placeholder="Password"></q-input>
          <q-input dense v-model="user.email" placeholder="Email"></q-input>
          <q-input dense v-model="user.phonenumber" placeholder="Username"></q-input>
          <q-btn icon="fingerprint" color="blue" @click="register"></q-btn>
        </transition-group>
      </q-card-section>

      <transition appear
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut">
        <q-icon v-if="showRegisterSuccessIcon" name="face" color="yellow"></q-icon>
      </transition>

      <transition appear
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut">
        <q-icon v-if="showRegisterFailureIcon" name="face" color="red"></q-icon>
      </transition>

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
  export default {
    name: 'Register',
    components: {

    },
    data() {
      return {
        loading: true,
        showCard: false,
        showLogo: false,
        showRegisterSuccessIcon: false,
        showRegisterFailureIcon: false,
        register: {
          firstname: null,
          lastname: null,
          username: null,
          email: null,
          phonenumber: null,
          password: null,
        }
      }
    },
    methods: {
      login() {
        this.$axios.post(`${this.$domain}/api/auth/register`, this.user)
            .then(res => {
              if (res.status === 200) {
                this.showRegisterSuccessIcon = true
              }
            })
            .catch(err => {
              if (err.status === 400) {
                this.showRegisterFailureIcon = true
                // iterate ModelState
              }
            })
      }
    },
    computed: {},
    beforeCreate() {
      console.log(`Communicating with server endpoint @ ${this.$domain}/api/quote`)
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
