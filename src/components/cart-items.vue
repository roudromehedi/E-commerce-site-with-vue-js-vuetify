<template>
  <v-card flat class="d-flex flex-row" color="#ECEFF1">
    <v-img
      class="align-self-center"
      :src="image"
      max-width="150"
      max-height="150"
    />
    <v-card-text class="ml-3">
      <div class="d-flex justify-space-between align-center">
        <h3 class="headline mb-0">{{ title }}</h3>
      </div>
      <div class="mt-2">
        <span class="font-weight-bold">Price: {{ price }} €</span>
        <span class="ml-2">Quantity: {{ quantity }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CartItems",
  components: {},
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
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
};
</script>
