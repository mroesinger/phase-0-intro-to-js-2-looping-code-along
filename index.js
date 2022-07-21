const cards = [];

function writeCards(cards) {
  let array = [];
  for (let i = 0; i < cards.length; i++) {
    array.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
  }

  return array;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"]));

function countDown(startingNumber) {
  while (startingNumber > 0) {
    console.log(startingNumber);
    startingNumber -= 1;
  }
  console.log(startingNumber);
}
