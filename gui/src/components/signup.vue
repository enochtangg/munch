<template>
    <div class="container">
        <md-card>
            <md-card-header>
                <div class="md-title">Signup As A Munch Restaurant</div>
                <div class="md-subhead">Choose any username and password</div>
            </md-card-header>

            <md-card-content>
                <md-field>
                    <label>Pick a Username</label>
                    <md-input v-model="username" type="username"></md-input>
                </md-field>
                <md-field>
                    <label>Pick a Password</label>
                    <md-input v-model="password" type="password"></md-input>
                </md-field>
            </md-card-content>

            <md-card-actions>
                <md-button class="'md-raised" @click="signup">Sign-up!</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "signup",
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      signup() {
        axios.post('http://munchapi.herokuapp.com/register', {username: this.username, password: this.password})
          .then(response => this.registerSuccessful(response))
          .catch(() => this.registerFailed())
      },
      registerSuccessful(res) {
        this.$router.replace(this.$route.query.redirect || '/')
      },
      registerFailed() {
        alert('Failed to sign up')
      }
    }
  }
</script>

<style scoped>
    .container {
        width: 60%;
        margin: auto;
    }
</style>