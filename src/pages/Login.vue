<template>
  <q-page class="flex ">
    <q-card v-show="showCard" flat bordered class="card q-ma-md">
      <q-card-section>
        <div class="text-h6 text-center">Welcome to Hypertrope Core!</div>
        <div class="text-h6 text-center">Please login</div>
      </q-card-section>

      <q-card-section class="text-center">
        <transition-group
                appear
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
        >
          <q-input dense v-model="user.username" placeholder="Username"></q-input>
          <q-input dense v-model="user.password" placeholder="Password"></q-input>
          <q-btn icon="fingerprint" color="blue" @click="login"></q-btn>
        </transition-group>
      </q-card-section>

      <transition appear
                  enter-active-class="animated jello"
                  leave-active-class="animated fadeOut">
        <div v-show="showLogo" class="flex flex-center">
          <q-btn dense flat size="132px" icon="donut_small" color="blue"></q-btn>
        </div>
      </transition>

      <transition appear
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut">
        <q-icon v-if="showLoginSuccessIcon" name="face"></q-icon>
      </transition>

    </q-card>

    <q-inner-loading :showing="loading">
      <q-spinner-tail size="50px" color="primary"></q-spinner-tail>
    </q-inner-loading>

  </q-page>
</template>

<script>
  export default {
    name: 'PageIndex',
    components: {

    },
    data() {
      return {
        loading: true,
        showCard: false,
        showLogo: false,
        showLoginSuccessIcon: false,
        user: {
          username: null,
          password: null
        }
      }
    },
    methods: {
      login() {
        this.$axios.post(`${this.$domain}/api/auth/login`, this.user)
            .then(res => {
              if (res.status === 200) {
                const jToken = res.data.token
                this.showLoginSuccessIcon = true
              }
            })
            .catch(err => {
              if (err.status === 401) {
                this.$q.notify({
                  message: 'Incorrect username/password',
                  color: 'negative'
                })
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
