// Lấy các phần tử HTML thông qua ID và Class
const modal = document.getElementById("rsvpModal");
const openBtn = document.getElementById("openPopupBtn");
const closeBtn = document.querySelector(".close-btn");

// Khi người dùng bấm nút Đăng ký, đổi CSS display từ 'none' sang 'block' để hiện Popup
openBtn.onclick = function() {
    modal.style.display = "block";
}

// Khi người dùng bấm vào dấu X, đổi lại thành 'none' để ẩn đi
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Khi người dùng bấm ra ngoài vùng trắng của form (bấm vào nền đen mờ), cũng tự động ẩn form
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --- Xử lý sự kiện Lightbox cho Thư viện ảnh ---

const lightbox = document.getElementById("imageLightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = document.querySelectorAll(".gallery-img"); // Lấy toàn bộ các ảnh có class là gallery-img
const closeLightbox = document.querySelector(".close-lightbox");

// Duyệt qua từng bức ảnh trong thư viện
images.forEach(img => {
    // Khi click vào một bức ảnh bất kỳ
    img.onclick = function() {
        lightbox.style.display = "block"; // Hiện khung đen
        lightboxImg.src = this.src; // Lấy đường dẫn (src) của ảnh nhỏ, gán cho ảnh to
    }
});

// Khi bấm vào dấu X thì đóng Lightbox
closeLightbox.onclick = function() {
    lightbox.style.display = "none";
}

// Bấm ra ngoài vùng ảnh (vào nền đen) cũng sẽ đóng Lightbox
lightbox.onclick = function(event) {
    if (event.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
}