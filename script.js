const btnLanjut = document.getElementById('btn-lanjut');
const btnKembali = document.getElementById('btn-kembali');
const welcomeScreen = document.getElementById('welcome-screen');
const profileScreen = document.getElementById('profile-screen');

btnLanjut.addEventListener('click', () => {
    // Memunculkan kotak konfirmasi (Pop-up) sesuai permintaan
    const konfirmasi = confirm("Pastikan Anda yakin ingin melanjutkan?");
    
    if (konfirmasi) {
        // Berpindah dari halaman awal ke halaman profil
        welcomeScreen.classList.remove('active');
        profileScreen.classList.add('active');
    }
});

btnKembali.addEventListener('click', () => {
    // Kembali ke halaman awal
    profileScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
});
