const cards = () => {
    cardsArr = [];
    vals = ['A','2','3','4','5','6','7',
            '8','9','10','J','Q','K'];
    suits = ['S', 'H', 'D', 'C'];
    for (let suit of suits) {
        for (let val of vals) {
            cardsArr.push({suit, val})
        }
    }
    return cardsArr;
} 
const deck = {
    cards: cards(),
    shuffle: function() {
        let remainingCards = [...this.cards];
        shuffledCards = [];
        for (let i = remainingCards.length-1; i >= 0; i--) {
            let random = Math.floor(Math.random() * (i + 1));
            shuffledCards.push(remainingCards[random]);
            remainingCards.splice(random,1);
        };
        return this.cards = shuffledCards;
    },
    draw: function() {
        this.cards.shift()
    },
    reset: function() {
        this.cards = cards()        
    }
}

deck.shuffle()
console.log(deck.cards);
deck.draw()
deck.draw()
deck.draw();
console.log(deck.cards);
deck.reset();
console.log(deck.cards);
deck.shuffle();
console.log(deck.cards);


// -------------------start of davids object---------------------

// const deck = {
//     cards: createCards(),    
//     shuffle: function () {
//       let currentIndex = this.cards.length    
//       let temporaryValue
//       let randomIndex
//       while (0 !== currentIndex) {
//         randomIndex = Math.floor(Math.random() * currentIndex)    
//         currentIndex -= 1
  
//         temporaryValue = this.cards[currentIndex]
//         this.cards[currentIndex] = this.cards[randomIndex]
//         this.cards[randomIndex] = temporaryValue
//       }
//     },
//     draw: function () {
//       return this.cards.shift()    
//     },
//     reset: function () {
//       this.cards = createCards()    
//     },
//   }
  
//   function createCards() {
//     let cards = []    
//     let suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds']
//     let values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
//     for (const value of values) {
//       for (const suit of suits) {
//         cards.push({ suit, value })    
//       }
//     }
//     return cards
//   }
  
//   console.log('deck:', deck)
//   console.log('deck.length:', deck.cards.length)
  
//   deck.shuffle()
//   console.log('deck:', deck)
//   deck.draw()
//   deck.draw()
//   deck.draw()
//   deck.draw()
//   deck.draw()
//   deck.draw()
//   deck.draw()
//   deck.draw()
//   deck.draw()
//   console.log(deck.draw())

// ------------------end of Davids object-----------------------


// // seach js remove at index (of array)





// Deck of Cards

// Create an object that represents a deck of playing cards.
// It will have a property cards that contains an array of all 52 cards including all clubs, spades, hearts and diamonds. Use a loop to generate the cards instead of adding each manually. The cards should be represented as an object with the properties: suit & number.

// Example Deck with a few Cards:
// const deck = {
//   cards: [
//     { suit: "hearts", number: 1 },

//     { suit: "spades", number: 10 },
//     ...
//   ]
// }

// Additionally, add the following methods to the deck:
// - shuffle will randomly reorder the cards in the deck.
// - draw will remove and return the top card of the deck.
// - reset method which resets deck to all 52 cards.