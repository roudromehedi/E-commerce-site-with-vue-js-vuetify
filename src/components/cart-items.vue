<template>
  <v-card flat class="d-flex flex-row" min-height="100">
    <v-img
      contain
      class="align-self-center"
      :src="image"
      max-width="100"
      max-height="100"
    />
    <v-card-text class="ml-3">
      <div class="d-flex justify-space-between align-center">
        <h3 class="mb-0">{{ title }}</h3>
      </div>
      <div class="mt-2">
        <div>
          <span class="font-weight-bold">Price: </span>
          <span>{{ totalPrice }} €</span>
        </div>
        <div class="mt-2">
          <span class="font-weight-bold">Quantity:</span>
          <select v-model="selectedQuantity" @change="updateQuantity">
            <option v-for="i in 3" :value="i" :key="i">{{ i }}</option>
          </select>
        </div>
      </div>
    </v-card-text>
    <v-icon class="mr-2" color="red" @click="deleteItem"
      >mdi-delete-outline</v-icon
    >
  </v-card>
</template>

<script>
export default {
  name: "CartItems",
  components: {},
  data() {
    return {
      selectedQuantity: 1,
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    price: {
      default: 0,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    image: {
      type: String,
      default: null,
    },
  },
  computed: {
    totalPrice() {
      return this.price * this.quantity;
    },
  },
  methods: {
    updateTotalPrice() {
      this.$emit("update-total-price");
    },
    updateQuantity() {
      this.$emit("update-quantity", this.selectedQuantity);
    },
    deleteItem() {
      this.$emit("delete", this.title);
    },
  },
};
</script>
