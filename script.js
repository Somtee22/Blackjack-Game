let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message =" ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl =document.getElementById("cards-el");

function getRandomCard(){
    return 5
}



function startGame(){
    renderGame()
} 

function renderGame() {
    cardsEl.textContent = "cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    if (sum <= 20  ) {  
    message = "Do you want to draw new card?";
} else if (sum === 21) {
    message ="You've got Blackjack";
    hasBlackJack = true;
} else {
    message ="You're out of the game";
    isAlive = false;
}

messageEl.textContent = message;
sumEl.textContent = "sum: " + sum;


}

function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards)
    renderGame();
}



function rollDice(){
    let renderNumber = Math.floor(Math.random() * 6) + 1

   return renderNumber

}
console.log(rollDice())