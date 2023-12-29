const headerTop = document.getElementById("headerTop")
const headerTop_exit = document.getElementById("headerTop_exit")
const burger_btn = document.getElementById("burgerBtn")
const menu = document.getElementById("menu")

headerTop_exit.addEventListener("click", () => {
    headerTop.style.display = "none"
})

burger_btn.addEventListener("click", () => {
    menu.classList.toggle('active')
})

// slider

$(document).ready(function () {
    $('.feature__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.clients__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
