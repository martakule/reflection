const stored = localStorage.getItem("theme");
const system = window.matchMedia("(prefers-color-scheme: dark)").matches
	? "dark"
	: "light";
const fallback = "light";

const theme = stored || system || fallback;

// On page load, set the theme
document.querySelector("html").setAttribute("data-theme", theme);

// Return props for the icon button
const getButtonProps = () => {
	if (theme === "light") {
		return {
			icon: "./assets/sun.svg",
			label: "light theme",
		};
	}
	if (theme === "dark") {
		return {
			icon: "./assets/moon.svg",
			label: "dark theme",
		};
	}
	return {
		icon: "./assets/computer.svg",
		label: "system theme",
	};
};

export const getThemeButton = () => ({
	...getButtonProps(),
	hide: false,
	onClick: handleThemeChange,
});

function handleThemeChange() {
	return 2;
}
