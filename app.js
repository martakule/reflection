import { Body } from "./components/body.js";
import { Button } from "./components/button.js";
import { Heading } from "./components/heading.js";
import { Notes } from "./components/notes.js";
import DATA from "./data.json" with { type: "json" };

const root = document.getElementById("app");

// Reveal app
const introButton = document.getElementById("intro");
introButton.addEventListener("click", revealApp);

function revealApp() {
	introButton.classList.add("hide");
	root.classList.remove("hide");
	document.getElementById("controls").classList.remove("hide");
}

// Track node IDs (stack includes current screen)
let currentId = DATA.start;
const flow = [DATA.start];

// Reset app
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetApp);

function resetApp() {
	location.reload();
}

// Render previous state
const backButton = document.getElementById("previous");
backButton.addEventListener("click", handleBackClick);

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
