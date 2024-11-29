
function VerifyMouseDown() {
    this.classList.add('s-card-hovered')


}

function VerifyMouseLeave() {
    this.classList.remove('s-card-hovered')
}

function addEventListenerToCards(){
    const cardElements = document.getElementsByClassName('s-card')

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        
        card.addEventListener('mouseenter' , VerifyMouseDown)
        card.addEventListener('mouseleave' , VerifyMouseLeave)
    }

    console.log(cardElements)
}

document.addEventListener('DOMContentLoaded', addEventListenerToCards, false)
