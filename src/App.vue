<template>
  <v-app>
    <v-main>
      <Navbar class="index" />
      <router-view /> <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
