<template>
    <div class="container">
        <md-card class="create-card">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">Create a Restaurant</div>
                    <div class="md-subhead">Enter your restaurant information to start receiving orders from companies
                    </div>
                </md-card-header-text>
            </md-card-header>

            <md-card-content>
                <md-field>
                    <label>Restaurant Name</label>
                    <md-input v-model="restaurant_name" type="name"></md-input>
                </md-field>
            </md-card-content>

            <md-card-actions>
                <md-button class="md-raised" @click="submit">Create</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "create",
    data() {
      return {
        restaurant_name: ''
      }
    },
    methods: {
      submit() {
        let headers = {
          headers: {
            'Authorization': 'Bearer ' + localStorage.token,
            'Content-Type': 'application/json',
          }
        };
        let data = {
          restaurant_name: this.restaurant_name
        };
        axios.post('http://localhost:5000/restaurant/new', data, headers)
          .then(response => this.submitSuccessful(response))
          .catch(() => this.submitFailed());
        this.$router.push({
          name: 'Dashboard',
        });
      },
      submitSuccessful() {
      },
      submitFailed() {
        alert('Could not submit to API')
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