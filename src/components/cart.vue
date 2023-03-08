<template>
  <v-dialog v-model="showDialog" class="px-5 py-5" max-width="600">
    <v-card
      ><v-container class="px-5 py-5">
        <cartItems
          v-for="item in cartItems"
          :key="item"
          :title="item.title"
          :image="item.images[0]"
          class="mb-2"
        ></cartItems>
        <v-card-actions>
          <v-btn outlined color="red" text @click="closeDialog">Close</v-btn>
          <v-spacer></v-spacer>
          <v-btn outlined color="green" text>Payment</v-btn>
        </v-card-actions></v-container
      ></v-card
    >
  </v-dialog>
</template>

<script>
import cartItems from "./cart-items.vue";
export default {
  name: "CartDialog",
  components: { cartItems },
  data() {
    return {};
  },
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
    cartItems: { type: [] },
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>
