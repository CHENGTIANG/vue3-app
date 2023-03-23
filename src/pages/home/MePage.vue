<template>
  <v-container>
    <v-list class="mb-2">
      <v-list-item prepend-avatar="https://picsum.photos/200/200" title="Grant">
      </v-list-item>

      <v-list-item prepend-icon="mdi-image">
        <v-list-item-title>Moments</v-list-item-title>
      </v-list-item>

      <v-list-item prepend-icon="mdi-cog-outline">
        <v-list-item-title>Settings</v-list-item-title>
      </v-list-item>
      <v-list-item prepend-icon="mdi-information">
        <v-list-item-title>About</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-btn block @click="$router.replace('/signin')">Sign Out</v-btn>
  </v-container>
</template>
