<template>
  <v-dialog v-model="showDialog" class="px-5 py-5" max-width="600">
    <v-card>
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
          <v-btn outlined color="red" text @click="closeDialog">Close</v-btn>
          <v-spacer></v-spacer>
          <v-btn outlined color="green" text>Payment</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import cartItems from "./cart-items.vue";

export default {
  name: "CartDialog",
  data() {
    return {
      totalPrice: 0,
    };
  },
  components: { cartItems },
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
    cartItems: { type: Array },
  },
  created() {
    this.calculateTotalPrice();
  },
  methods: {
    calculateTotalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    closeDialog() {
      this.$emit("close");
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cartItems));
    },
    updateQuantity(index, newQuantity) {
      this.cartItems[index].quantity = newQuantity;
      localStorage.setItem("cart", JSON.stringify(this.cartItems));
    },
  },
  watch: {
    cartItems(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$nextTick(() => {
          this.totalPrice = newVal.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          );
        });
      }
    },
  },
};
</script>
