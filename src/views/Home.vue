<template>
  <v-app>
    <Dashboard />
  </v-app>
</template>

<script>
import Dashboard from "../components/Dashboard";

export default {
  name: "Home",

  components: {
    Dashboard,
  },
  data() {
    return {
      alertVisible: true,
    };
  },
};
</script>
<style scoped>
.index {
  z-index: 9999;
}
</style>
