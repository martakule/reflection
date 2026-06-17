export const IconButton = (icon, label, hide, onClick) => {
	// Button
	const buttonEl = document.createElement("button");
	buttonEl.setAttribute("type", "button");
	buttonEl.setAttribute("class", `icon-button ${hide ? "hide" : ""}`);
	buttonEl.addEventListener("click", onClick);

	// Image
	const imgEl = document.createElement("img");
	imgEl.setAttribute("alt", label);
	imgEl.setAttribute("src", icon);

	// Combine and return
	buttonEl.appendChild(imgEl);
	return buttonEl;
};
