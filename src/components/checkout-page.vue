<template>
  <v-card class="px-10 py-10">
    <div class="text-center">
      <h1>Shopping Bag</h1>
    </div>
    <v-container class="px-5 py-5">
      <cartItems
        v-for="(item, index) in cartItems"
        :key="item.id"
        :title="item.title"
        :image="item.images[0]"
        :price="item.price"
        :quantity="item.quantity"
        class="mb-2"
        @delete="removeItem(index)"
        @update-quantity="updateQuantity(index, $event)"
      ></cartItems>
      <div class="mt-5 d-flex justify-space-between">
        <span class="font-weight-bold">Total Price:</span>
        <span class="font-weight-bold">{{ calculateTotalPrice() }} €</span>
      </div>
      <v-card-actions>
        <v-btn outlined color="red" text>Close</v-btn>
        <v-spacer></v-spacer>
        <v-btn text outlined color="green">Preceed to Payment</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
import cartItems from "./cart-items.vue";
export default {
  name: "CheckoutPage",
  components: { cartItems },
  data() {
    return {
      cartItems: [],
    };
  },

  created() {
    this.cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  },
  methods: {
    calculateTotalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
};
</script>
