import { Body } from "./body.js";
import { Heading } from "./heading.js";
import { IconButton } from "./icon-button.js";

const infoModal = document.getElementById("info");

function hideModal() {
	infoModal.classList.remove("show");
}

const paragraphs = [
	'Content inspired by work with <a href="https://kerrifullerton.com/kerri-fullerton/" target="_blank">Kerri Fullerton, ND</a>.',
	'Background image by <a href="https://unsplash.com/@aesullivan2010" target="_blank">Anna Sullivan on Unsplash</a>.',
	'Icons by various contributors to <a href="https://www.svgrepo.com/" target="_blank">SVG REPO</a>.',
];

export const renderModal = () => {
	infoModal.appendChild(
		IconButton("./assets/close.svg", "close", false, hideModal),
	);
	infoModal.appendChild(Heading("Attributions"));
	paragraphs.forEach((para) => {
		const paragraph = Body("");
		paragraph.innerHTML = para;
		infoModal.appendChild(paragraph);
	});
};
