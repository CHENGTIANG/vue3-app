<template>
  <div>
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
    <div class="pa-2">
      <v-btn block>Sign Out</v-btn>
    </div>
  </div>
</template>
