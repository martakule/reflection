export const Button = (label, next, onClick, index) => {
  console.log(index);
  const buttonEl = document.createElement("button");
  buttonEl.setAttribute("type", "button");
  buttonEl.setAttribute(
    "class",
    `button ${index % 2 === 0 ? "left" : "right"}`,
  );
  buttonEl.textContent = label;
  buttonEl.setAttribute("data-next", next);
  buttonEl.addEventListener("click", onClick);
  return buttonEl;
};
