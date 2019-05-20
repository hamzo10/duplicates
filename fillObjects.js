let cardDeck = [];
let maxCount = 98;
/* console.log(cardDeck.length) */
/* let card; */

for (let i = 1; i < maxCount; i++) {
  desc = "";
  switch (i) {
    case 5:
    case 61:
      desc = "DRAW1";
      break;
    case 11:
    case 25: 
      desc = "STOP";
      break;
    case 96:
    case 47:
        desc = 'SILENCE';
        break;
    case 54:
        desc = 'STACK3';
    case 83:
        desc = 'LOOSE'
        break;
    
  }
  let card = {
    number: i + 1,
    description: desc
  };
  cardDeck.push(card);
}
/* 
let filterCountry = Object.keys(cardDeck).filter(key => {
  return cardDeck[key] === number;
}); */

/* console.log(filterCountry); */

console.log(cardDeck);

/*  let cards = new Array(98);

 function addIt(e) {
     e.preventDefault();
    createElement(getNumber());
 }

 function getNumber(){
    for(let i = 2; i < cards.length; i++) {

    }   
    return;
 }

 function createElement(theList) {
    let divTag = document.getElementById('element');
    let cardTag = document.createElement('p');
    cardTag.innerText = 'card: ' + theList.cards[i];
    divTag.appendChild(cardTag);
 }

 let card = {
     number : ''

 }
 */

/*     switch (cards) {
        case 5 : cards[5] = cards['DRAW1'];
        break;
        case 11 : cards[11] = cards['STOP'];
        break;
        case 25 : cards[25] = cards['STOP'];
        break;
        case 33 : cards[33] = cards['NO10'];
        break;
        case 47 : cards[47] = cards['SILENCE'];
        break;
        case 54 : cards[54] = cards['STACK'];
        break;
        case 61 : cards[61] = cards['DRAW1'];
        break;
        case 76 : cards[76] = cards['STOP'];
        break;
        case 83 : console.log(cards[83] = cards['LOOSE']);
        break;
    } */
/* console.log('card: ' + (i+1)); */

/*  5 - DRAW1  
11 - STOP  
25 - LOOSE  
33 - NO10  
47 - SILENCE  
54 - STACK3  
61 - DRAW1  
76 - STOP  
83 - LOOSE  
96 - SILENCE   */
