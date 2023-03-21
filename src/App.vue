<template>
  <v-theme-provider root :theme="theme">
    <v-app>
      <router-view></router-view>
      <v-overlay
        attach="body"
        z-index="2500"
        :model-value="loader.loading"
        persistent
        contained
        class="align-center justify-center"
      >
        <v-card>
          <v-card-text
            class="d-flex flex-column align-center justify-center pa-6 pb-4"
          >
            <v-progress-circular indeterminate size="36"></v-progress-circular>
            <span class="mt-2">{{ loader.message }}</span>
          </v-card-text>
        </v-card>
      </v-overlay>
      <v-snackbar v-model="error.snackbar">
        {{ error.message }}
      </v-snackbar>
    </v-app>
  </v-theme-provider>
</template>

<script lang="ts" setup>
import { ref, inject, onMounted } from "vue";
const theme = ref("light");
function toggleDarkTheme(value: boolean) {
  theme.value = value ? "dark" : "light";
}
onMounted(() => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  toggleDarkTheme(prefersDark.matches);
  prefersDark.addEventListener("change", (mediaQuery) =>
    toggleDarkTheme(mediaQuery.matches)
  );
});
const loader: any = inject("loader");
const error: any = inject("error");
</script>
