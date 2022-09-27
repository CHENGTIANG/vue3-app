<template>
  <v-app-bar class="app-bar safe-area-app-bar" density="compact">
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-app-bar-title>Vue3 App</v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer
    class="safe-area-navigation-drawer"
    color="grey-darken-2"
    v-model="drawer"
    temporary
  >
    <v-list>
      <v-list-item to="/home">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item to="/favorites">
        <v-list-item-title>Favorites</v-list-item-title>
      </v-list-item>
      <v-list-item to="/nearby">
        <v-list-item-title>Nearby</v-list-item-title>
      </v-list-item>
      <v-list-item to="/me">
        <v-list-item-title>Me</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-main class="safe-area-main">
    <router-view></router-view>
  </v-main>
  <v-bottom-navigation grow class="safe-area-bottom-navigation">
    <v-btn to="/home" color="primary">
      <v-icon icon="mdi-home"></v-icon>
      <span>Home</span>
    </v-btn>
    <v-btn to="/favorites" color="primary">
      <v-icon icon="mdi-heart"></v-icon>
      <span>Favorites</span>
    </v-btn>
    <v-btn to="/nearby" color="primary">
      <v-icon icon="mdi-map-marker"></v-icon>
      <span>Nearby</span>
    </v-btn>
    <v-btn to="/me" color="primary">
      <v-icon icon="mdi-account"></v-icon>
      <span>Me</span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script lang="ts">
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
<style scoped>
.app-bar {
  background-color: rgba(var(--v-theme-background), 0.8) !important;
  backdrop-filter: blur(12px);
}
</style>
