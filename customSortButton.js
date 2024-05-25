// File baru: customSortButton.js

function customSortCards() {
    const cardOrder = [
        "ace_of_hearts", "ace_of_diamonds", "ace_of_clubs", "ace_of_spades",
        "2_of_hearts", "2_of_diamonds", "2_of_clubs", "2_of_spades",
        "3_of_hearts", "3_of_diamonds", "3_of_clubs", "3_of_spades",
        "4_of_hearts", "4_of_diamonds", "4_of_clubs", "4_of_spades",
        "5_of_hearts", "5_of_diamonds", "5_of_clubs", "5_of_spades",
        "6_of_hearts", "6_of_diamonds", "6_of_clubs", "6_of_spades",
        "7_of_hearts", "7_of_diamonds", "7_of_clubs", "7_of_spades",
        "8_of_hearts", "8_of_diamonds", "8_of_clubs", "8_of_spades",
        "9_of_hearts", "9_of_diamonds", "9_of_clubs", "9_of_spades",
        "10_of_hearts", "10_of_diamonds", "10_of_clubs", "10_of_spades",
        "jack_of_hearts", "jack_of_diamonds", "jack_of_clubs", "jack_of_spades",
        "queen_of_hearts", "queen_of_diamonds", "queen_of_clubs", "queen_of_spades",
        "king_of_hearts", "king_of_diamonds", "king_of_clubs", "king_of_spades",
        "joker1", "joker2", "joker3", "joker4"
    ];

    players.forEach(playerCards => {
        playerCards.sort((a, b) => cardOrder.indexOf(a) - cardOrder.indexOf(b));
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
            cardImg.style.padding = '-10px';
            cardsDiv.appendChild(cardImg);
        });
        playerDiv.appendChild(cardsDiv);
    });
}

// Membuat tombol untuk mengurutkan kartu sesuai kriteria khusus
const customSortButton = document.createElement('button');
customSortButton.textContent = 'Urutkan Kartu Khusus';
customSortButton.addEventListener('click', customSortCards);

// Menambahkan tombol ke dalam dokumen
document.body.appendChild(customSortButton);
