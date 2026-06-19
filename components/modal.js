import { Body } from "./body.js";
import { Heading } from "./heading.js";
import { IconButton } from "./icon-button.js";

const infoModal = document.getElementById("info");

function hideModal() {
	infoModal.classList.remove("show");
}

const paragraphs = [
	'Decision tree inspired by work with <a href="https://kerrifullerton.com/kerri-fullerton/" rel="noopener noreferrer" target="_blank">Kerri Fullerton, ND</a>.',
	'Reactive hypoglycemia snack ideas (PDF) from <a href="https://www.wsh.nhs.uk/CMS-Documents/Patient-leaflets/DiabetesUnit/6768-1-Dietary-guidelines-for-reactive-hypoglycaemia.pdf" rel="noopener noreferrer" target="_blank">West Suffolk NHS Foundation Trust</a>',
	'Images by <a href="https://unsplash.com/@aesullivan2010" target="_blank" rel="noopener noreferrer">Anna Sullivan</a> and <a href="https://unsplash.com/@snapbythree" target="_blank" rel="noopener noreferrer">SnapbyThree MY</a>.',
	'Icons by various contributors to <a href="https://www.svgrepo.com/" target="_blank" rel="noopener noreferrer">SVG REPO</a>.',
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
