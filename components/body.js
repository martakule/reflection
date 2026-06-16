export const Body = (text) => {
	const body = document.createElement("p");
	body.textContent = text;
	body.setAttribute("class", "body");
	return body;
};
