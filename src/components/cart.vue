<template>
  <v-dialog v-model="showDialog" max-width="290">
    <v-card>
      <v-card-title class="headline">Hello World</v-card-title>
      <v-card-text> Dialog component. </v-card-text>
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
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>
