import {
  defineConfig,
  presetWind3,
  presetIcons,
  transformerDirectives,
  // presetTypography,
} from "unocss";

import hazeuiPreset from "@haze-ui/preset";

export default defineConfig({
  presets: [
    presetIcons({ scale: 1.2 }),
    presetWind3(),
    // presetTypography(),
    hazeuiPreset(),
  ],

  transformers: [transformerDirectives()],

  theme: {
    colors: {
      fg: "var(--fg)",
      bg: "var(--bg)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      border: "var(--border)",
      input: "var(--input)",
      ring: "var(--ring)",
      mutedfg: "var(--mutedfg)",
      mutedbg: "var(--mutedbg)",
      success: "var(--success)",
      warning: "var(--warning)",
      danger: "var(--danger)",
    },
  },

  shortcuts: { 
    frow : 'flex items-center gap3'

  }
});
