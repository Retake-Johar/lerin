// Menu
let menu = document.querySelector("#menu_icon");
let nav_list = document.querySelector(".nav_list");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    nav_list.classList.toggle("open")
}

var swiper = new Swiper(".teachers_slider", {
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    pagination: {
        le: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});



























// var swiper = new Swiper(".myswiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
