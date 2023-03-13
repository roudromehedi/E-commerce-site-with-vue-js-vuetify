<template>
  <v-row>
    <v-col cols="3" class="py-0 pr-0 mt-n3">
      <v-card flat outlined tile height="400px" class="scroll">
        <v-toolbar flat>
          <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
          <strong>CATEGORIES</strong>
          <v-spacer></v-spacer>
          <v-icon color="grey" small>mdi-close</v-icon>
        </v-toolbar>
        <v-layout>
          <div class="mt-n5">
            <v-list-item v-for="(item, i) in category" :key="i">
              <v-list-item-content
                @click="filterCategory(item)"
                class="cursor-pointer"
              >
                <v-list-item-title
                  v-text="item"
                  class="ml-8"
                ></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-subtitle
                  v-text="category.count"
                ></v-list-item-subtitle>
              </v-list-item-action>
            </v-list-item>
          </div>
        </v-layout>
      </v-card>
      <v-card flat outlined tile>
        <v-toolbar flat>
          <v-icon color="black" class="mr-2">msi-chevron-down</v-icon>
          <strong>PRICE</strong>
          <v-spacer></v-spacer>
          <v-icon color="grey" small>mdi-close</v-icon>
        </v-toolbar>
        <v-toolbar flat>
          <v-text-field
            placeholder="$50"
            filled
            rounded
            dense
            class="mx-2"
          ></v-text-field>
          <v-text-field
            placeholder="$1900"
            filled
            rounded
            dense
            class="mx-2"
          ></v-text-field>
        </v-toolbar>
        <v-range-slider color="blue" max="40" min="-30"></v-range-slider>
      </v-card>
      <v-card flat outlined tile>
        <v-toolbar flat>
          <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
          <strong>BRAND</strong>
          <v-spacer></v-spacer>
          <v-icon color="grey" small>mdi-close</v-icon>
        </v-toolbar>
        <v-list dense class="mt-n5">
          <v-list-item v-for="brand in brands" :key="brand.title">
            <v-list-item-content>
              <v-list-item-title
                v-text="brand.title"
                class="ml-6"
              ></v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox color="primary" v-model="brand.state"></v-checkbox>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card flat outlined tile>
        <v-toolbar flat>
          <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
          <strong>COLOR</strong>
          <v-spacer></v-spacer>
          <v-icon color="grey" small>mdi-close</v-icon>
        </v-toolbar>
        <v-chip-group column multiple class="ml-2">
          <v-chip filter outlined color="black" text-color="black"></v-chip>
          <v-chip filter color="#E6E6E6" text-color="black"></v-chip>
          <v-chip filter color="#FFB500" text-color="white"></v-chip>
          <v-chip filter color="#F27229" text-color="white"> </v-chip>
          <v-chip filter color="#EB3427" text-color="white"> </v-chip>
          <v-chip filter color="#923FA3" text-color="white"> </v-chip>
          <v-chip filter color="#3A51DF" text-color="white"> </v-chip>
          <v-chip filter color="#23A7F5" text-color="white"> </v-chip>
          <v-chip filter color="#5EB524" text-color="white"> </v-chip>
          <v-chip filter color="#7C5F4D" text-color="white"> </v-chip>
          <v-chip filter color="black" text-color="white"> </v-chip>
          <v-chip filter color="lime" text-color="white"> </v-chip>
        </v-chip-group>
      </v-card>
      <v-card flat outlined>
        <v-toolbar flat>
          <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
          <strong>SIZE</strong>
          <v-spacer></v-spacer>
          <v-icon color="grey" small>mdi-close</v-icon>
        </v-toolbar>
        <v-chip-group
          column
          multiple
          active-class="blue white--text"
          class="ml-2"
        >
          <v-chip v-for="size in sizes" :key="size" :value="size" class="size">
            {{ size }}
          </v-chip>
        </v-chip-group>
      </v-card>
    </v-col>
    <Products :items="this.categories"></Products>
  </v-row>
</template>

<script>
import Products from "./products.vue";
export default {
  name: "ProductDisplay",

  components: {
    Products,
  },
  data() {
    return {
      category: [],
      brands: [
        { title: "Lifestyle", state: true },
        { title: "Running", state: false },
        { title: "Training & Gym", state: true },
        { title: "Basketball", state: false },
      ],
      sizes: [
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
      ],
      categories: {},
    };
  },
  props: {},
  mounted() {
    fetch("https://dummyjson.com/products/categories/")
      .then((response) => response.json())
      .then((data) => {
        this.category = data;
      })
      .catch((error) => console.log(error));
    fetch("https://dummyjson.com/products/category/laptops")
      .then((response) => response.json())
      .then((data) => {
        this.categories = data.products;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    filterCategory(item) {
      fetch(`https://dummyjson.com/products/category/${item}`)
        .then((response) => response.json())
        .then((data) => {
          this.categories = data.products;
        })
        .catch((error) => console.log(error));
    },
  },
  computed: {
    items() {
      return Array.from({ length: 1 }, (k, v) => v + 1);
    },
    length() {
      return 100;
    },
  },
};
</script>
<style scoped>
.scroll {
  overflow-y: scroll;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
