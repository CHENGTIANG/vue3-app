<template>
  <v-layout>
    <v-container class="text-center">
      <div class="safe-area-a">
        <div class="text-h5 mb-6">Sign in</div>
        <v-text-field variant="outlined" label="Username" />
        <v-text-field variant="outlined" label="Password" />
        <v-btn block color="primary" replace to="/" class="mb-4">Sign in</v-btn>
        <v-btn block to="/" replace>
          <v-icon icon="mdi-github"></v-icon>
          Sign in with Githab
        </v-btn>
      </div>
    </v-container>
  </v-layout>
</template>
