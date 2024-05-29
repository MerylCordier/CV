//Selecting the elements
const cards = document.getElementsByClassName('card');
const cardsBack = document.getElementsByClassName('card__back');
const cardsFront = document.getElementsByClassName('card__front');


//Adding event listener

// On click

for(let i = 0; i < cards.length; i++){ 
  cardsBack[i].classList.add('flip'); 
cards[i].addEventListener('click', () => {
  cardsBack[i].classList.toggle('flip');
  cardsFront[i].classList.toggle('flip');
});
}

// On hover

// for(let i = 0; i < cards.length; i++){ 
//   cardsBack[i].classList.remove('flip'); 
//   cardsFront[i].classList.add('flip');
// cards[i].addEventListener('mouseenter', () => {
//   cardsBack[i].classList.add('flip');
//   cardsFront[i].classList.remove('flip');
// });
// }
// for(let i = 0; i < cards.length; i++){ 
//   cardsBack[i].classList.add('flip'); 
//   cardsFront[i].classList.remove('flip');
// cards[i].addEventListener('mouseleave', () => {
//   cardsBack[i].classList.remove('flip');
//   cardsFront[i].classList.add('flip');
// });
// }
