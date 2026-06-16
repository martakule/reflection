export const Button = (label, next, onClick) => {
	const buttonEl = document.createElement("button");
	buttonEl.setAttribute("type", "button");
	buttonEl.setAttribute("class", "button");
	buttonEl.textContent = label;
	buttonEl.setAttribute("data-next", next);
	buttonEl.addEventListener("click", onClick);
	return buttonEl;
};
