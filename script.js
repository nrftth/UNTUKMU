const heartsBg = document.getElementById('hearts-bg');
const heartSymbols = ['🤍', '✨', '🌸', '🦋', '💖']; // Kamu bisa mengganti atau menambah emoji di sini

setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Memilih icon secara acak dari array
    heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    
    // Mengatur posisi dan ukuran acak agar terlihat natural
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's'; // Kecepatan melayang (4-7 detik)
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px'; // Ukuran acak (15-35px)
    
    heartsBg.appendChild(heart);

    // Menghapus elemen setelah selesai melayang agar browser tidak berat/lag
    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 400); // Intensitas kemunculan objek (setiap 400ms)
