const cards = document.getElementsByClassName("s-card");

function VerifyMouseDown() {
  this.classList.add("s-card-hovered");
  document.body.id = `${this.id}-hovered`;
}

function VerifyMouseLeave() {
  this.classList.remove("s-card-hovered");
  document.body.id = ``;
}

function addEventListenerToCards() {
  const cardElements = document.getElementsByClassName("s-card");

  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];

    card.addEventListener("mouseenter", VerifyMouseDown);
    card.addEventListener("mouseleave", VerifyMouseLeave);
  }

  console.log(cardElements);
}

document.addEventListener("DOMContentLoaded", addEventListenerToCards, false);

function SelectCarouseltem(selectedButton) {
  const selectedItem = selectedButton.id;
  const carousel = document.querySelector(".s-cards-carousel");
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYdeg = -120 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(
    rotateY[0],
    `rotateY(${rotateYdeg}deg)`
  );

  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector(
    ".s-controller__button--active"
  );

  activeButtonElement.classList.remove("s-controller__button--active");
  selectedButton.classList.add("s-controller__button--active");
}
