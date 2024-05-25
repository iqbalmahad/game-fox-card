function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const suits = ["_of_hearts", "_of_diamonds", "_of_clubs", "_of_spades"];
const ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king","ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
const joker = ["joker1", "joker2", "joker3", "joker4"];

let cards = [];

for (const suit of suits) {
    for (const rank of ranks) {
        cards.push(rank + suit);
    }
}

// Menambahkan kartu joker ke dalam deck
cards.push(...joker);

shuffle(cards);

let players = [[], [], [], [], []];
for (let i = 0; i < 21 * 5; i++) { // Mengatur jumlah kartu yang ingin dibagikan ke setiap pemain
const playerIndex = i % 5;
players[playerIndex].push(cards[i]);
}

// Menyimpan sisa kartu yang tidak terbagikan
const remainingCards = cards.slice(21 * 5); // Mengatur jumlah kartu yang ingin dibagikan ke setiap pemain

// Menampilkan kartu ke dalam div masing-masing pemain
const playersDivs = [
document.getElementById('player1'),
document.getElementById('player2'),
document.getElementById('player3'),
document.getElementById('player4'),
document.getElementById('player5'),
];

players.forEach((playerCards, i) => {
const cardsDiv = document.createElement('div');
cardsDiv.className = 'cards';
playerCards.forEach(card => {
const cardImg = document.createElement('img');
cardImg.src = `img/${card}.png`; // Sesuaikan dengan path gambar kartu Anda
cardImg.alt = card;
cardImg.className = 'card';
cardImg.style.width = '50px';
cardImg.style.height = '100%';
cardImg.style.padding = '-10px';
cardsDiv.appendChild(cardImg);
});
playersDivs[i].appendChild(cardsDiv);
});

// Menampilkan sisa kartu yang tidak terbagikan
const remainingCardsDiv = document.getElementById('remaining-cards');
remainingCardsDiv.textContent = `Sisa kartu: ${remainingCards.join(', ')}`;