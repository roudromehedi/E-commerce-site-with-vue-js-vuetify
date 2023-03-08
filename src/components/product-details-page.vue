<template>
  <v-container class="mt-5">
    <v-card flat class="px-10 py-10"
      ><v-row>
        <v-col cols="4">
          <v-img
            :src="item.images[currentImageIndex]"
            contain
            max-height="300"
            min-height="300"
          ></v-img>
          <v-row>
            <v-col
              v-for="(image, index) in item.images.slice(1)"
              :key="index"
              cols="3"
            >
              <v-img
                :src="image"
                contain
                @click="setCurrentImageIndex(index + 1)"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="8">
          <h5>{{ item.brand }}</h5>
          <h1>{{ item.title }}</h1>
          <div class="d-flex">
            <v-rating
              :value="item.rating"
              color="amber"
              dense
              half-increments
              readonly
            ></v-rating>
            <div>({{ item.rating }} out of 5)</div>
          </div>
          <div class="mt-5">
            Description: {{ item.description }} {{ item.description }}
          </div>
          <div class="font-weight-bold mt-5">Price: {{ item.price }} €</div>
          <div class="d-flex">
            <div class="d-flex align-center">
              <div>Quantity:</div>
              <select v-model="selectedQuantity" @change="updateQuantity">
                <option v-for="i in 3" :value="i" :key="i">{{ i }}</option>
              </select>
            </div>
            <v-spacer></v-spacer>
            <v-btn color="#3853D8" dark @click="addToCart">Add to cart</v-btn>
          </div>
        </v-col>
      </v-row></v-card
    >
  </v-container>
</template>

<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      id: this.$route.params.id,
      item: {},
      currentImageIndex: 0,
      selectedQuantity: 1,
    };
  },
  async created() {
    this.item = await this.getProductById(this.id);
  },
  methods: {
    updateQuantity() {
      this.$emit("update-quantity", this.selectedQuantity);
    },
    addToCart() {
      // retrieve the existing cart data from localStorage
      const storedCart = localStorage.getItem("cart");

      // if there's existing data, parse it as JSON and use it as the initial cart array
      this.cart = storedCart ? JSON.parse(storedCart) : [];

      // push the new item to the cart
      this.cart.push(this.item);

      // store the updated cart data in localStorage
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    async getProductById(id) {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const product = await response.json();
        return product;
      } catch (error) {
        console.error(error);
      }
    },
    setCurrentImageIndex(index) {
      this.currentImageIndex = index;
    },
  },
};
</script>
<style scoped></style>
