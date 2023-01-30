<template>
  <v-dialog v-model="showDialog" max-width="290">
    <v-card class="px-5 py-5">
      <v-card-title class="ml-auto px-0">Cart Items</v-card-title>
      <div v-for="item in cartItems" :key="item">* {{ item }}</div>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green" text @click="closeDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CartDialog",
  components: {},
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
