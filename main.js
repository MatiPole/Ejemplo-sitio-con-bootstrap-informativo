"use strict";
const accordionButton = document.querySelector(".accordion-button");
const verMasSpan = accordionButton.querySelector(".ver-mas");

accordionButton.addEventListener("click", function () {
  if (accordionButton.classList.contains("collapsed")) {
    verMasSpan.textContent = "Ver Más";
  } else {
    verMasSpan.textContent = "Ver Menos";
  }
});
