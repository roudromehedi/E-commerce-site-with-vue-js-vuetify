<template>
  <v-container fluid>
    <categoryBar></categoryBar>
    <v-card tile class="mx-16 mt-n10 card1" color="white">
      <HeroSection></HeroSection>
      <Toolbar></Toolbar>
      <ProductDisplay></ProductDisplay> </v-card
    ><Newsletter></Newsletter>
  </v-container>
</template>

<script>
import categoryBar from "./category-bar.vue";
import HeroSection from "./hero-section.vue";
import Toolbar from "./toolbar-section.vue";
import ProductDisplay from "./product-display.vue";
import Newsletter from "./newsletter-section.vue";
export default {
  components: {
    categoryBar,
    HeroSection,
    Toolbar,
    ProductDisplay,
    Newsletter,
  },
  data: () => ({
    page: 1,
    items: [
      {
        text: "Home",
        disabled: false,
        href: "breadcrumbs_home",
      },
      {
        text: "Catalog",
        disabled: false,
        href: "breadcrumbs_catalog",
      },
      {
        text: "Men",
        disabled: false,
        href: "breadcrumbs_men",
      },
      {
        text: "Shoes",
        disabled: false,
        href: "breadcrumbs_shoes",
      },
    ],
  }),
};
</script>

<style>
.container {
  padding: 0px !important;
}
.v-btn.withoutupercase {
  text-decoration: none;
}
.v-chip.v-size--default {
  border-radius: 50px !important;
  font-size: 14px !important;
  height: 40px !important;
  width: 40px !important;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.card1 {
  z-index: 10;
}
.card2 {
  z-index: 1;
}
</style>
