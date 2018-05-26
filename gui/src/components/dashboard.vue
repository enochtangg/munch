<template>
    <div class="container">
        <md-card class="create-card">
            <md-card-header>
                <div class="md-title">Dashboard</div>
            </md-card-header>

            <md-card-content>
                <p class="md-subheading">Listed below are all your restaurants your own</p>
            </md-card-content>

            <md-card-actions>
                <md-button class="md-raised" @click="createRestaurant">Create a new restaurant</md-button>
            </md-card-actions>
        </md-card>

        <md-card class="restaurant-card" v-for="restaurant in restaurants" :key="restaurant.id">
            <md-card-media-cover>
                <md-card-media>
                <img src="../assets/food-card.jpg">
                </md-card-media>

                <md-card-area>
                    <md-card-header>
                        <span class="md-title">{{ restaurant.restaurant_name }}</span>
                    </md-card-header>

                    <md-card-actions>
                        <md-button class="md-raised" @click="enterRestaurant(restaurant)">Enter</md-button>
                    </md-card-actions>
                </md-card-area>
            </md-card-media-cover>
        </md-card>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "dashboard",
    data() {
      return {
        restaurants: []
      }
    },
    methods: {
      getRestaurants() {
        axios.get('http://localhost:5000/restaurants', {
          headers: {
            'Authorization': 'Bearer ' + localStorage.token
          },
        })
          .then(response => this.restaurants = response.data.restaurants)
          .catch(() => this.getTheatreFailed());
      },
      getTheatreFailed() {
        alert('Could not query API for theatres')
      },
      createRestaurant() {
        this.$router.push({
          name: 'Create'
        });
      },
      enterRestaurant(restaurant) {
        this.$router.push({
          name: 'Restaurant',
          params: {
            restaurant: restaurant
          }
        });
      }
    },
    mounted() {
      this.getRestaurants()
    }
  }
</script>

<style scoped>
    .container {
        width: 95%;
        margin: auto;
    }

    .restaurant-card {
        width: 30.9%;
        float: left;
        margin-left: 20px;
        margin-top: 20px;
    }

</style>