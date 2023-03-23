<template>
  <v-container>
    <v-carousel :show-arrows="false" height="min(40vw, 40vh)" class="mb-2">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
    <v-row dense>
      <v-col
        v-for="n in 20"
        :key="n"
        class="d-flex child-flex"
        cols="4"
        sm="3"
        md="2"
      >
        <v-img
          :src="`https://picsum.photos/200/200?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/10?image=${n * 5 + 10}`"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const items = ref([
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
  },
]);
</script>
