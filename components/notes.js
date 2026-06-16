export const Notes = (items) => {
	const list = document.createElement("ul");
	list.setAttribute("class", "notes");

	items.forEach((item) => {
		const listItem = document.createElement("li");
		listItem.textContent = item;
		listItem.setAttribute("class", "note");
		list.appendChild(listItem);
	});
	return list;
};
