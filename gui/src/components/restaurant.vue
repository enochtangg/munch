<template>
    <div>
        <md-card class="menu-card">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{ restaurant.restaurant_name }}'s Menu Items</div>
                </md-card-header-text>
            </md-card-header>

            <md-card-content>
                <p v-for="item in restaurant.items">{{item.item_name}}</p>
            </md-card-content>
        </md-card>
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
    </div>
</template>

<script>
  export default {
    name: "restaurant",
    props: ['restaurant'],
    data() {
      return {
        food_item: ''
      }
    },
    methods: {}
  }
</script>

<style scoped>
    .menu-card {
        width: 50%;
        float: left;
    }
</style>