function sortCards() {
    const rankOrder = {
        'ace_of_hearts': 1, '2_of_hearts': 2, '3_of_hearts': 3, '4_of_hearts': 4, '5_of_hearts': 5,
        '6_of_hearts': 6, '7_of_hearts': 7, '8_of_hearts': 8, '9_of_hearts': 9, '10_of_hearts': 10,
        'jack_of_hearts': 11, 'queen_of_hearts': 12, 'king_of_hearts': 13,
        'ace_of_diamonds': 14, '2_of_diamonds': 15, '3_of_diamonds': 16, '4_of_diamonds': 17, '5_of_diamonds': 18,
        '6_of_diamonds': 19, '7_of_diamonds': 20, '8_of_diamonds': 21, '9_of_diamonds': 22, '10_of_diamonds': 23,
        'jack_of_diamonds': 24, 'queen_of_diamonds': 25, 'king_of_diamonds': 26,
        'ace_of_clubs': 27, '2_of_clubs': 28, '3_of_clubs': 29, '4_of_clubs': 30, '5_of_clubs': 31,
        '6_of_clubs': 32, '7_of_clubs': 33, '8_of_clubs': 34, '9_of_clubs': 35, '10_of_clubs': 36,
        'jack_of_clubs': 37, 'queen_of_clubs': 38, 'king_of_clubs': 39,
        'ace_of_spades': 40, '2_of_spades': 41, '3_of_spades': 42, '4_of_spades': 43, '5_of_spades': 44,
        '6_of_spades': 45, '7_of_spades': 46, '8_of_spades': 47, '9_of_spades': 48, '10_of_spades': 49,
        'jack_of_spades': 50, 'queen_of_spades': 51, 'king_of_spades': 52,
        'joker1': 53, 'joker2': 54, 'joker3': 55, 'joker4': 56
    };

    players.forEach(playerCards => {
        playerCards.sort((a, b) => rankOrder[a] - rankOrder[b]);
    });

    // Menampilkan ulang kartu ke dalam div masing-masing pemain setelah diurutkan
    playersDivs.forEach((playerDiv, i) => {
        playerDiv.innerHTML = ''; // Menghapus kartu yang ada sebelumnya
        const cardsDiv = document.createElement('div');
        cardsDiv.className = 'cards';
        players[i].forEach(card => {
            const cardImg = document.createElement('img');
            cardImg.src = `img/${card}.png`; // Sesuaikan dengan path gambar kartu Anda
            cardImg.alt = card;
            cardImg.className = 'card';
            cardImg.style.width = '50px';
            cardImg.style.height = '100%';
            cardsDiv.appendChild(cardImg);
        });
        playerDiv.appendChild(cardsDiv);
    });
}


// Membuat tombol untuk mengurutkan kartu
const sortButton = document.createElement('button');
sortButton.textContent = 'Urutkan Kartu';
sortButton.addEventListener('click', sortCards);

// Menambahkan tombol ke dalam dokumen
document.body.appendChild(sortButton);
