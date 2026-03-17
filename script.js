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