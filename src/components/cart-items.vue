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
        <span class="font-weight-bold">Price: {{ price }} €</span>
        <span class="ml-2">Quantity: {{ quantity }}</span>
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
  methods: {
    deleteItem() {
      this.$emit("delete", this.title);
    },
  },
};
</script>
