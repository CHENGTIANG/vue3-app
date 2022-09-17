import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.vue3app",
  webDir: "dist",
  appName: "vue3-app",
  bundledWebRuntime: false,
  server: {
    url: "http://localhost:3000",
    cleartext: true,
  },
  ios: {
    allowsLinkPreview: false,
  },
};

export default config;
