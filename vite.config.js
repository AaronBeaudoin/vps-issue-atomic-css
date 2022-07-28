import { defineConfig } from "vite";
import VitePluginVue from "@vitejs/plugin-vue";
import VitePluginSSR from "vite-plugin-ssr/plugin";
import VitePluginUnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    VitePluginVue(),
    VitePluginSSR({
      includeAssetsImportedByServer: true
    }),
    VitePluginUnoCSS({
      presets: [],
      rules: [
        [
          /^bg-([a-z]+)$/,
          match => ({ "background-color": match[1] })
        ]
      ]
    })
  ]
});
