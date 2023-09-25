const langButton = document.getElementById("lang-button");
const langSelector = document.querySelector(".lang-selector");

langButton.addEventListener("click", () => {
  // Toggle la visibilité de la lang-selector
  langSelector.classList.toggle("visible");
});
