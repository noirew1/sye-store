const judulAsli = document.title;

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.title = "👋 Jangan lupa kembali ke Sye Store!";
    } else {
        document.title = judulAsli;
    }
});
