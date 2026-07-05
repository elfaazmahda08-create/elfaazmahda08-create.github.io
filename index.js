// Klik gambar galeri
const gambar = document.querySelectorAll(".gal img");

gambar.forEach(img => {
    img.addEventListener("click", function(){
        document.getElementById("lightbox").style.display = "flex";
        document.getElementById("lightbox-img").src = this.src;
    });
});

// Tutup gambar
function tutupGambar(){
    document.getElementById("lightbox").style.display = "none";
}