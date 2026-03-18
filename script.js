// ==========================================
// 1. XỬ LÝ POPUP ĐĂNG KÝ (RSVP MODAL)
// ==========================================
const modal = document.getElementById("rsvpModal");
const openBtn = document.getElementById("openPopupBtn");
const closeBtn = document.querySelector(".close-btn");

openBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// ==========================================
// 2. XỬ LÝ MENU MOBILE (NÚT 3 GẠCH)
// ==========================================
const mobileMenu = document.getElementById('mobile-menu');
const navItems = document.querySelectorAll('.nav-links li a');

// Thay đổi: Gắn class 'push-active' cho toàn bộ body trang web
mobileMenu.addEventListener('click', function() {
    document.body.classList.toggle('push-active');
});

// Khi click vào một link bất kỳ, gỡ class để body trượt về chỗ cũ
navItems.forEach(item => {
    item.addEventListener('click', function() {
        document.body.classList.remove('push-active');
    });
});


// ==========================================
// 3. XỬ LÝ THANH NAV ĐỔI MÀU KHI CUỘN TRANG
// ==========================================
const navbarElement = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbarElement.classList.add('scrolled'); 
    } else {
        navbarElement.classList.remove('scrolled'); 
    }
});


// ==========================================
// 4. XỬ LÝ GALLERY ẢNH (KÉO THẢ & MỞ LIGHTBOX)
// ==========================================
const slider = document.querySelector('.gallery-grid');
const lightbox = document.getElementById("imageLightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightboxBtn = document.querySelector(".close-lightbox");

let isDown = false; 
let startX; 
let scrollLeft; 
let isDragging = false; 

// QUAN TRỌNG: Ngăn chặn trình duyệt tự động lôi cái ảnh đi (thay cho CSS pointer-events)
const galleryImages = document.querySelectorAll('.gallery-img');
galleryImages.forEach(img => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
});

// Sự kiện: Khi ấn chuột xuống
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    isDragging = false; // Reset trạng thái kéo
    slider.classList.add('active-dragging'); 
    startX = e.pageX - slider.offsetLeft; 
    scrollLeft = slider.scrollLeft; 
});

// Sự kiện: Khi chuột rời khỏi vùng ảnh
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active-dragging');
});

// Sự kiện: Khi nhả chuột ra
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active-dragging');
});

// Sự kiện: Khi di chuyển chuột để kéo
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; 
    e.preventDefault(); 
    isDragging = true; // Đánh dấu là người dùng đang "kéo" chứ không phải "click"
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Tốc độ lướt (có thể đổi số 2 thành 1 hoặc 3)
    slider.scrollLeft = scrollLeft - walk; 
});

// Sự kiện: Mở Lightbox khi click vào ảnh
slider.addEventListener('click', (e) => {
    // Nếu người dùng vừa thực hiện hành động kéo thì chặn, không cho mở ảnh
    if (isDragging) {
        isDragging = false; 
        return;
    }

    // Nếu người dùng click dứt khoát vào ảnh thì mở Lightbox
    if (e.target.classList.contains('gallery-img')) {
        lightbox.style.display = "block";
        lightboxImg.src = e.target.src; 
    }
});

// Sự kiện: Đóng Lightbox
closeLightboxBtn.onclick = function() {
    lightbox.style.display = "none";
}

// Sự kiện: Click ra ngoài nền đen để đóng Lightbox
lightbox.onclick = function(event) {
    if (event.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
}