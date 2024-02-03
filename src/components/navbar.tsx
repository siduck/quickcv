import { createSignal, Show } from "solid-js";
import { generatePDF } from "../utils";

import { Icon } from "@iconify-icon/solid";

export const [selectedFormat, setFormat] = createSignal("PNG");
export const [loaderIconSet, setLoaderIcon] = createSignal(false);

const Navbar = () => {
  const [theme, setTheme] = createSignal(localStorage.theme || "light");

  return (
    <div
      class="vertCentered justify-between [&_iconify-icon]:text-xl [&_button]:rounded-full"
      p="y-2 b-5 md:y-5 md:t-2"
    >
      {/* Branding */}
      <h3 vertCentered text="blue-6 dark:blue-5" class="text-2xl my-0">
        <img w-6 src="/logo.svg" />
        Quick
        <span text-2xl text-slate-7 dark:text-white-3>
          Cv
        </span>
      </h3>

      <div vertCentered>
        <button
          aria-label="theme toggler"
          bg-white-1
          text-black-2
          onclick={() => {
            const newTheme = theme() == "light" ? "dark" : "light";
            setTheme(newTheme);
            const el = document.querySelector("html")!;
            el.className = localStorage.theme = newTheme;
          }}
        >
          <Show
            when={theme() == "light"}
            fallback={<Icon icon="ph:moon-stars-bold" />}
          >
            <Icon icon="ph:sun-bold" />
          </Show>
        </button>

        <button p-2 onclick={() => generatePDF()}>
          <Icon
            icon="material-symbols:download"
            class="bg-blue-5 text-white-1 p-1 rounded-full"
          />
          Download
        </button>
      </div>
    </div>
  );
};

export default Navbar;
