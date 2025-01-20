// Daftar teks yang akan diganti
const texts = [
    "Just a dev, fixing bugs.",
    "A lifelong learner.",
    "Always improving through coding."
  ];
  
  let currentIndex = 0;
  const typingElement = document.getElementById('typing-text');
  
  function typeText() {
    typingElement.innerHTML = ''; // Menghapus teks sebelumnya
    const currentText = texts[currentIndex];
    
    let i = 0;
    const interval = setInterval(() => {
        typingElement.innerHTML += currentText[i];
        i++;
        if (i === currentText.length) {
            clearInterval(interval);
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length; // Berganti ke teks berikutnya
                typeText(); // Memulai animasi lagi
            }, 1000); // Tunggu 1 detik sebelum berganti teks
        }
    }, 100); // Kecepatan mengetik
  }
  
  typeText();