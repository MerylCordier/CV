// ===== Selecting the elements =====

const cards = document.getElementsByClassName("card");
const cardsBack = document.getElementsByClassName("card__back");
const cardsFront = document.getElementsByClassName("card__front");
const links = document.querySelectorAll("a");

// ===== Adding event listener =====

// On click
for (let i = 0; i < cards.length; i++) {
  cardsBack[i].classList.add("flip");

  cards[i].addEventListener("click", () => {
    cardsBack[i].classList.toggle("flip");
    cardsFront[i].classList.toggle("flip");
  });
}

// Stop event propagation on links
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    console.log("ok");
    event.stopPropagation();
  });
});
