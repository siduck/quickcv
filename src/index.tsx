import "uno.css";
import "./css/style.css";

import { render } from "solid-js/web";
import App from "./components/App";

// set site theme
const el = document.querySelector("html")!;
el.className = localStorage.theme || "light";

// render app
const root = document.getElementById("app");
render(() => <App />, root);
