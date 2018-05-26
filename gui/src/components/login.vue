<template>
    <div class="container">
        <md-card>
            <md-card-header>
                <div class="md-title">Munch Restaurant Login</div>
                <div class="md-subhead">Enter your login credentials open restaurant portal</div>
            </md-card-header>

            <md-card-content>
                <md-field>
                    <label>Username</label>
                    <md-input v-model="username" type="username"></md-input>
                </md-field>
                <md-field>
                    <label>Password</label>
                    <md-input v-model="password" type="password"></md-input>
                </md-field>
            </md-card-content>

            <md-card-actions>
                <md-button class="'md-raised" @click="signup">Sign-up</md-button>
                <md-button class="md-raised" @click="login">Login</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "login",
    data() {
      return {
        username: '',
        password: '',
        error: false

      }
    },
    methods: {
      login() {
        axios.post('http://munchapi.herokuapp.com/login', {username: this.username, password: this.password})
          .then(response => this.loginSuccessful(response))
          .catch(() => this.loginFailed())
      },
      loginSuccessful(res) {
        if (!res.data.access_token) {
          this.loginFailed();
          return
        }
        else {
          localStorage.token = res.data.access_token;
          this.error = false;
          document.username = this.username;
          this.$router.replace(this.$route.query.redirect || 'dashboard/')
        }
      },

      loginFailed() {
        this.error = 'Login Failed. Please check credentials and try again!';
        delete localStorage.token
      },
      signup() {
        this.$router.replace(this.$route.query.redirect || 'signup/')
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