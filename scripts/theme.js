import { IconButton } from "../components/icon-button.js";

const stored = localStorage.getItem("theme");
const system = window.matchMedia("(prefers-color-scheme: dark)").matches
	? "dark"
	: "light";
const fallback = "light";
const initialTheme = stored || system || fallback;

const root = document.querySelector("html");
root.setAttribute("data-theme", initialTheme);

const iconForTheme = (t) =>
	t === "dark"
		? { icon: "./assets/moon.svg", label: "dark theme" }
		: { icon: "./assets/sun.svg", label: "light theme" };

const getButtonProps = () =>
	iconForTheme(root.getAttribute("data-theme") || fallback);

const getThemeButton = () => ({
	...getButtonProps(),
	hide: false,
	onClick: toggleTheme,
});

let themeButtonEl = null;

export function mountThemeButton(controls) {
	themeButtonEl = IconButton(getThemeButton());
	controls.appendChild(themeButtonEl);
}

function toggleTheme() {
	const current = root.getAttribute("data-theme") || fallback;
	const next = current === "dark" ? "light" : "dark";
	root.setAttribute("data-theme", next);
	localStorage.setItem("theme", next);
	const nextBtn = IconButton(getThemeButton());
	themeButtonEl.replaceWith(nextBtn);
	themeButtonEl = nextBtn;
}
