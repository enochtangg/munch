<template>
    <div>
        <md-card class="menu-card">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">Add A New Food Item</div>
                </md-card-header-text>
            </md-card-header>
            <md-content>
                <md-field style="padding-left: 10px">
                    <label>Food Item</label>
                    <md-input v-model="food_item" type="name"></md-input>
                </md-field>
            </md-content>
            <md-card-actions>
                <md-button class="md-raised" @click="submit">Submit</md-button>
            </md-card-actions>
        </md-card>

        <md-card class="menu-card">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{ this.current_restaurant.restaurant_name }}'s Menu Items</div>
                </md-card-header-text>
            </md-card-header>

            <md-card-content>
                <p v-for="item in this.current_restaurant.items">{{item.item_name}}</p>
            </md-card-content>
        </md-card>

        <md-card class="menu-card">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">Current Orders</div>
                </md-card-header-text>
            </md-card-header>

            <md-card-content>
                <p v-for="order in this.current_orders">{{order}}</p>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "restaurant",
    props: ['restaurant'],
    data() {
      return {
        food_item: '',
        current_restaurant: '',
        current_orders: []
      }
    },
    methods: {
      submit() {
        axios.post('http://munchapi.herokuapp.com/item/new', {
          item_name: this.food_item,
          restaurant_name: this.restaurant.restaurant_name
        })
          .then(response => this.loginSuccessful(response))
          .catch(() => this.loginFailed());
        this.food_item = '';
        alert('Added!')
      },
      loadRestaurant(res) {
        this.current_restaurant = res.data.restaurants[this.restaurant.restaurant_id - 1]
      },
      loadOrder(res) {
        this.current_orders.push(res.data.item_name)
      },
      watchForItems() {
        setInterval(function () {
          axios.get('http://munchapi.herokuapp.com/restaurants')
            .then(response => this.loadRestaurant(response))
            .catch(() => this.failed())
        }.bind(this), 1000);
      },
      watchForOrders() {
        setInterval(function () {
          axios.post('http://munchapi.herokuapp.com/item/order', {
            restaurant_name: this.restaurant.restaurant_name
          })
            .then(response => this.loadOrder(response))
            .catch(() => this.failed())
        }.bind(this), 2000);
      }
    },
    mounted() {
      this.watchForOrders();
      this.watchForItems()
    },
  }
</script>

<style scoped>
    .menu-card {
        width: 45%;
        margin: auto;
        padding-top: 10px;
    }
</style>