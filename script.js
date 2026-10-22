// Mengambil elemen dari DOM
const greetBtn = document.getElementById('greetBtn');
const messageBox = document.getElementById('messageBox');

// Daftar pesan sambutan interaktif secara bergantian
const messages = [
    "Halo! Terima kasih sudah berkunjung ke profil Muhamad Rafif Adinata. 🚀",
    "Semangat terus belajar kodingnya di TIK Tingkat Lanjut! ✨",
    "Tetap berkarya dan buat website yang luar biasa! 💻",
    "Salam kenal dari sistem interaktif JavaScript! 👋"
];

let messageIndex = 0;

// Event listener saat tombol diklik
greetBtn.addEventListener('click', () => {
    // Tampilkan pesan
    messageBox.textContent = messages[messageIndex];
    messageBox.classList.remove('hidden');
    
    // Putar indeks pesan untuk klik berikutnya
    messageIndex = (messageIndex + 1) % messages.length;
});y
