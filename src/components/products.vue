<template>
  <v-col cols="9" class="mt-n3">
    <v-row>
      <v-col
        cols="12"
        sm="4"
        v-for="(item, i) in items"
        :key="i"
        :class="item.class"
        ><ProductCard :item="item"></ProductCard>
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
import ProductCard from "./product-card.vue";
export default {
  name: "Products",
  components: { ProductCard },
  props: {
    items: {},
  },
  data() {
    return {};
  },
};
</script>

<style></style>
