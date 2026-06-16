export const Heading = (text) => {
	const heading = document.createElement("h1");
	heading.textContent = text;
	heading.setAttribute("class", "heading");
	return heading;
};
