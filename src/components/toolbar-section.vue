<template>
  <v-row>
    <v-col cols="12" sm="3" class="mt-n6 pr-0">
      <v-toolbar flat outlined>
        <v-toolbar-title><strong>Filter</strong></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-divider vertical></v-divider>
        <v-btn icon class="ml-1">
          <v-icon color="#3853D8"> mdi-sync </v-icon>
        </v-btn>
      </v-toolbar>
    </v-col>
    <v-col cols="12" sm="3" class="mt-n6 px-0">
      <v-toolbar flat outlined>
        <v-toolbar-title> SPORT BY: <span>Price $-$$</span> </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon class="mr-4">
          <v-icon color="black">mdi-menu-down</v-icon>
        </v-btn>
      </v-toolbar>
    </v-col>
    <v-col cols="12" sm="3" class="mt-n6 px-0">
      <v-toolbar flat outlined class="">
        <v-toolbar-title>SHOW: <span>12</span></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon class="mr-4">
          <v-icon color="black">mdi-menu-down</v-icon>
        </v-btn>
      </v-toolbar>
    </v-col>
    <v-col cols="12" sm="3" class="mt-n6 pl-0">
      <v-toolbar flat outlined>
        <v-btn icon class="mr-1">
          <v-icon color="#3853D8">mdi-apps</v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn icon class="mx-1">
          <v-icon color="grey">mdi-format-list-bulleted</v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-toolbar-title class="ml-2">
          <strong>COMPARE :</strong>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-badge color="#3853D8" content="3" class="mr-2"></v-badge>
      </v-toolbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      message: "Hello World!",
    };
  },
};
</script>
