import "iconify-icon";
import { createSignal, Show } from "solid-js";
import { generatePDF, generateSVG } from "../utils";

const DownloadBtns = () => (
  <>
    <button p-2 onclick={() => generateSVG()}>
      <iconify-icon
        icon="material-symbols:download"
        class="bg-blue-5 text-white-1 p-1 rounded-full"
      >
      </iconify-icon>
      SVG
    </button>

    <button p-2 onclick={() => generatePDF()}>
      <iconify-icon
        icon="material-symbols:download"
        class="bg-red-4 text-white-1 p-1 rounded-full"
      >
      </iconify-icon>
      PDF
    </button>
  </>
);

const Navbar = () => {
  const [theme, setTheme] = createSignal(localStorage.theme || "light");

  return (
    <div
      class="vertCentered justify-between [&_iconify-icon]:text-xl [&_button]:rounded-full"
      p="y-2 b-5 md:y-5"
    >
      {/* Branding */}
      <h3 text-blue-6 class="text-2xl my-0">
        Quick <span text-2xl text-slate-7 dark:text-white-3>Cv</span>
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
            fallback={<iconify-icon icon="ph:moon-stars-bold"></iconify-icon>}
          >
            <iconify-icon icon="ph:sun-bold"></iconify-icon>
          </Show>
        </button>

        <DownloadBtns />
      </div>
    </div>
  );
};

export default Navbar;
