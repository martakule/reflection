import { Body } from "../components/body.js";
import { Button } from "../components/button.js";
import { Heading } from "../components/heading.js";
import { IconButton } from "../components/icon-button.js";
import { renderModal } from "../components/modal.js";
import { Notes } from "../components/notes.js";
import DATA from "../data.json" with { type: "json" };

const root = document.getElementById("app");
const controls = document.getElementById("controls");

// Fill out control panel
controls.appendChild(
	IconButton("./assets/back.svg", "go back one step", true, handleBackClick),
);
controls.appendChild(
	IconButton("./assets/reset.svg", "reset flow", true, resetApp),
);
controls.appendChild(
	IconButton("./assets/info.svg", "show info about this app", false, showModal),
);

renderModal();

// Show info modal
function showModal() {
	document.getElementById("info").classList.add("show");
}

// Reveal app
document.getElementById("intro-button").addEventListener("click", revealApp);

function revealApp() {
	document.querySelectorAll(".hide").forEach((el) => {
		el.classList.remove("hide");
	});
	document.getElementById("intro").classList.add("hide");
}

// Track node IDs (stack includes current screen)
let currentId = DATA.start;
const flow = [DATA.start];

// Reset app
function resetApp() {
	location.reload();
}

// Render previous state
function handleBackClick() {
	if (flow.length === 1) {
		resetApp();
	} else {
		flow.pop();
		currentId = flow.at(-1);

		render();
	}
}

// Render next state
function handleNextClick(event) {
	const nextId = event.currentTarget.dataset.next;
	flow.push(nextId);
	currentId = nextId;
	render();
}

function render() {
	root.replaceChildren();

	const currentNode = DATA.nodes[currentId];
	const { heading, prompt, notes, choices } = currentNode;

	root.appendChild(Heading(heading));
	root.appendChild(Body(prompt));
	root.appendChild(Notes(notes));

	if (choices) {
		choices.forEach((choice, index) => {
			const { label, next } = choice;
			root.appendChild(Button(label, next, handleNextClick, index));
		});
	}
}

render();
