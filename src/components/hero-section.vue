<template>
  <v-row>
    <v-col cols="12" sm="8" class="pr-0">
      <v-card height="250px" tile flat color="#3890D8">
        <v-row>
          <v-col cols="12" sm="4" class="pl-8 pt-5">
            <v-btn color="black" dark class="withoutupercase" small tile>
              new
            </v-btn>
            <h6 class="white--text mt-8">MOUNTAIN BIKE</h6>
            <h3 class="white--text mt-5">Trek Speed Concept</h3>
            <v-btn
              rounded
              color="#4C9CDB"
              dark
              class="withoutupercase px-8 mt-10"
            >
              More Info
            </v-btn>
          </v-col>
          <v-col cols="12" sm="8">
            <v-img
              src="bike.png"
              max-height="400"
              max-width="400"
              contain
              class="mt-n6"
            ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4" class="pl-0">
      <v-card height="250px" tile flat color="#6857E1">
        <v-row>
          <v-col cols="12" sm="6" class="pl-8 pt-5">
            <v-btn color="black" dark class="withoutupercase" small tile>
              new
            </v-btn>
            <h6 class="white--text mt-8">DOWN JACKET</h6>
            <h3 class="white--text mt-5">Sale Collection 2015</h3>
            <v-btn
              rounded
              color="#8375E7"
              dark
              class="withoutupercase px-8 mt-3"
            >
              More Info
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img
              src="jacket2.png"
              max-height="400"
              max-width="420"
              contain
              class="mt-n2"
            ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {};
  },
};
</script>
