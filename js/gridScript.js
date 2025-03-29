// Lista de imagens para navegar
const images = [
    "assets/produto1.webp",
    "assets/produto2.webp",
    "assets/produto3.jpg",
    "assets/produto1.webp",
    "assets/produto2.webp",
    "assets/produto3.jpg"
];

let currentImageIndex = 0;

// Abre o modal e exibe a imagem clicada
function openModal(index) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    currentImageIndex = index;
    modalImage.src = images[currentImageIndex];
    modal.style.display = "flex";
}

// Fecha o modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

// Navega entre as imagens do modal
function navigateModal(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentImageIndex];
}