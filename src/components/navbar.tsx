import "iconify-icon";
import { createSignal, Show } from "solid-js";
import { generatePDF, generatePNG, generateSVG } from "../utils";

export const [formatsShown, showFormat] = createSignal(false);
export const [selectedFormat, setFormat] = createSignal("PNG");
export const [loaderIconSet, setLoaderIcon] = createSignal(false);

const DownloadBtns = () => (
  <div>
    <button p-2 onclick={() => showFormat(!formatsShown())}>
      <iconify-icon
        icon="material-symbols:download"
        class="bg-blue-5 text-white-1 p-1 rounded-full"
      >
      </iconify-icon>

      {selectedFormat()}

      {loaderIconSet()
        ? (
          <iconify-icon icon="mingcute:loading-3-fill" class="animate-spin">
          </iconify-icon>
        )
        : (
          <iconify-icon
            icon={formatsShown()
              ? "majesticons:close"
              : "ic:round-keyboard-arrow-down"}
          >
          </iconify-icon>
        )}
    </button>

    {formatsShown() &&
      (
        <div class="relative animate-smooth">
          <div
            bg="white-1 dark:black-3 [&_*]:transparent [&_*]:dark:transparent "
            text="[&_*]:black-1 dark:white-2"
            class="absolute right-1 mt-2 top-1"
            p="[&_*]:y-2.5 [&_*]:x-5"
            rounded="lg [&_*]:!none [&_*]:hover:!lg"
          >
            <button onclick={() => generatePNG()}>PNG</button>
            <button onclick={() => generateSVG()}>SVG</button>
            <button onclick={() => generatePDF()}>PDF</button>
          </div>
        </div>
      )}
  </div>
);

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
