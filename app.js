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
	introButton.setAttribute("class", "button hide");
	root.setAttribute("class", "app");
}

// Reset app
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetApp);

function resetApp() {
	location.reload();
}

function handleClick(event) {
	render(event.currentTarget.dataset.next);
}

function render(id) {
	root.replaceChildren();

	const currentNode = DATA.nodes[id];
	const { heading, prompt, notes, choices } = currentNode;

	root.appendChild(Heading(heading));
	root.appendChild(Body(prompt));
	root.appendChild(Notes(notes));

	if (choices) {
		choices.forEach((choice) => {
			const { label, next } = choice;
			root.appendChild(Button(label, next, handleClick));
		});
	}
}

render(DATA.start);
