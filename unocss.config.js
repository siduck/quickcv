import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx";
// lets me use unocss classes in css files
import transformerDirectives from "@unocss/transformer-directives";
import presetWebFonts from "@unocss/preset-web-fonts";

import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      white: {
        1: "#fff",
        2: "#c9d0dd",
      },

      black: {
        1: "#111825",
        2: "#0b121f",
      },
    },
  },

  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google", // default provider
      fonts: {
        sans: "Inter Tight:400,500,700",
        raleway: "Raleway:300,400,700",
      },
    }),
    ,
    presetAttributify(),
  ],

  rules: [
    ["softShadow", { "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }],
  ],

  shortcuts: [
    ["vertCentered", "flex items-center gap-2", { layer: "utilites" }],
  ],

  transformers: [transformerAttributifyJsx(), transformerDirectives()],
});
