<template>
  <v-theme-provider root :theme="theme">
    <v-app>
      <router-view></router-view>
      <v-overlay
        attach="body"
        z-index="2500"
        :model-value="loadingData.loading"
        persistent
        contained
        class="align-center justify-center"
      >
        <v-card>
          <v-card-text
            class="d-flex flex-column align-center justify-center pa-6 pb-4"
          >
            <v-progress-circular indeterminate size="36"></v-progress-circular>
            <span class="mt-2">{{ loadingData.message }}</span>
          </v-card-text>
        </v-card>
      </v-overlay>
      <v-snackbar
        v-for="message in messagesData"
        :model-value="true"
        :timeout="-1"
        :location="message.value.location"
        :color="message.value.type"
      >
        {{ message.value.message }}
      </v-snackbar>
    </v-app>
  </v-theme-provider>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { loadingData } from "./plugins/loading";
import { messagesData } from "./plugins/message";
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
</script>
