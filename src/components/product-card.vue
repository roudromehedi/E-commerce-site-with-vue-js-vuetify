<template>
  <v-card class="mx-auto my-12 pt-5" max-width="374">
    <router-link
      :to="{
        name: 'ProductDetailsPage',
        params: { id: item.id },
        props: { item: item },
      }"
    >
      <v-img
        :src="item.images[0]"
        max-height="200"
        max-width="500"
        min-height="200"
        contain
      ></v-img>
    </router-link>

    <v-card-title>{{ item.title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 text-subtitle-1">€ {{ item.price }}</div>

      <div class="cropped-text">
        {{ item.description }}
      </div>
      <div class="mt-2 read-more">Read more</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="addToCart">
        Add to cart
      </v-btn>
    </v-card-actions>
    <v-snackbar
      transition="fab-transition"
      v-model="showSnackbar"
      :timeout="2000"
      :top="true"
      :right="true"
      color="success"
      elevation="6"
    >
      <v-icon left>mdi-check-circle-outline</v-icon>
      Item added to cart!
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      cart: [],
      text: "Hello",
      id: 5,
      showSnackbar: false,
    };
  },
  props: {
    item: {},
  },
  methods: {
    addToCart() {
      // retrieve the existing cart data from localStorage
      const storedCart = localStorage.getItem("cart");

      // if there's existing data, parse it as JSON and use it as the initial cart array
      this.cart = storedCart ? JSON.parse(storedCart) : [];

      // push the new item to the cart
      this.cart.push(this.item);

      // store the updated cart data in localStorage
      localStorage.setItem("cart", JSON.stringify(this.cart));

      // show a success alert
      this.showSnackbar = true;
    },
  },
};
</script>

<style lang="scss">
.cropped-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.read-more {
  color: rgb(238, 119, 50);
}
</style>
