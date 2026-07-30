
document.addEventListener("DOMContentLoaded", function () {
    console.log("Sye Store berhasil dimuat!");

});
const judulAsli = document.title;

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.title = "👋 Jangan lupa kembali ke Sye Store!";
    } else {
        document.title = judulAsli;
    }
});
const tombol = document.getElementById("theme-toggle");

tombol.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        tombol.textContent = "☀️ Mode Terang";
    } else {
        tombol.textContent = "🌙 Mode Gelap";
    }
});
