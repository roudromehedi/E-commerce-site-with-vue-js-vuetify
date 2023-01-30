<template>
  <v-app-bar app color="#3853D8" dark>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-divider vertical class="ml-1 mr-3"></v-divider>
    <v-btn icon>
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <div
      style="
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
      "
    >
      <h4>SHOP NOW</h4>
    </div>

    <v-spacer></v-spacer>

    <v-divider vertical class=""></v-divider>
    <v-btn icon class="mx-1">
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
    <v-divider vertical class=""></v-divider>
    <v-btn icon class="mx-1">
      <v-icon>mdi-heart-outline</v-icon>
    </v-btn>
    <v-divider vertical class=""></v-divider>
    <v-btn icon class="mx-1" @click="getCart()">
      <v-badge color="#94D0EF" :content="this.cartItems.length">
        <v-icon>mdi-cart-outline</v-icon>
      </v-badge> </v-btn
    ><CartDialog
      :cartItems="this.cartItems"
      :show-dialog="showChildDialog"
      @close="showChildDialog = false"
    ></CartDialog>
  </v-app-bar>
</template>

<script>
import CartDialog from "./cart.vue";
export default {
  components: {
    CartDialog,
  },
  data() {
    return { cartItems: [], showChildDialog: false, length: 0 };
  },
  methods: {
    getCart() {
      this.showChildDialog = true;
      this.cartItems = JSON.parse(localStorage.getItem("cart"));
    },
  },
};
</script>

<style>
.v-toolbar__title {
  font-size: 1rem !important;
}
.v-badge__badge {
  font-size: 10px !important;
  height: 18px !important;
  min-width: 18px !important;
}
</style>
