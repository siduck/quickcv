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
      primary: { DEFAULT: "var(--primary)", fg: "var(--primary-fg)" },
      secondary: { DEFAULT: "var(--secondary)", fg: "var(--secondary-fg)" },
      border: "var(--border)",
      input: "var(--input)",
      ring: "var(--ring)",

      muted: {
        DEFAULT: "var(--muted)",
        fg: "var(--muted-fg)",
      },

      success: {
        DEFAULT: "var(--success)",
        subtle: "var(--success-subtle)",
      },

      warning: {
        DEFAULT: "var(--warning)",
        subtle: "var(--warning-subtle)",
      },

      danger: {
        DEFAULT: "var(--danger)",
        subtle: "var(--danger-subtle)",
      },

      info: {
        DEFAULT: "var(--info)",
        subtle: "var(--info-subtle)",
      },
    },
  },

  shortcuts: {
    frow: "flex items-center gap3",
  },
});
