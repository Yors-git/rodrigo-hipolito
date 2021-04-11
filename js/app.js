// Funcion para barra de Menu
$(window).scroll(function () {
    let header = $(".navbar");
    if ($(".navbar").offset().top > 500) {
        $(header).css("background", "#fff");
        $('.navbar-brand img').attr('src', 'images/Logo2.png')
    } else {
        // $(".navbar").addClass("navbar-expand-lg");
        $(header).css("background", "transparent");
        $('.navbar-brand img').attr('src', 'images/Logo.png')
    }
});


$(document).ready(function () {

    $('.hamburger').on('click', function () {
        $('.line').toggleClass('active-line');
    })

    // $(".owl-carousel").owlCarousel();
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },

            1000: {
                items: 3
            }
        }
    });

    // Carousel
    let next = $('.owl-next');
    let prev = $('.owl-prev');
    let activo = $('.owl-item.active');
    $(activo[1]).css('transform', 'scale(1)');
    let btn = $('.owl-item.active .btn');
    $(btn[1]).css('color', 'aqua');

    $(next).on('click', function () {
        let activos = $('.owl-item.active');
        let btn = $('.owl-item.active .btn');
        $(activos).css('transform', 'scale(.85)');
        $(activos[1]).css('transform', 'scale(1)');
        $(btn).css('color', '#fff')
        $(btn[1]).css('color', 'aqua');
        console.log(activos)
    });
    $(prev).on('click', function () {
        let activos = $('.owl-item.active');
        let btn = $('.owl-item.active .btn');
        $(activos).css('transform', 'scale(.85)');
        $(activos[1]).css('transform', 'scale(1)');
        $(btn).css('color', '#fff')
        $(btn[1]).css('color', 'aqua');
        console.log(activos)
    })

    const accordion = $('.accordion');

    $(accordion).on('click', '.card', function () {
        let t = $(this);
        let s = $(t).siblings();
        $(t).find('.card-header').toggleClass('testimonial-active');
        $(t).find('.name').toggleClass('name-active');
        // $(t).find('i').removeClass('fa-plus').addClass('fa-minus').toggleClass('i-active');
        $(t).find('i').toggleClass('fa-plus').toggleClass('fa-minus').toggleClass('i-active');
        $(s).find('.card-header').removeClass('testimonial-active');
        $(s).find('.name').removeClass('name-active');
        // $(s).find('i').toggleClass('i-active');
        // $(s).find('i').removeClass('fa-minus').addClass('fa-plus').removeClass('i-active');
    });

    const images = $('.cuadro');
    $(images).on('click', 'a', function (e) {
        e.preventDefault();
        let t = $(this);
        let l = $(t).attr('href');
        $(l).toggleClass("servicio-activo").siblings().removeClass('servicio-activo');
    })

});

/* Smooth scrolling para anclas */
$("a.smooth").on("click", function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr("href");
    $("html, body").stop().animate({
        scrollTop: $(anchor).offset().top - 100 + "px"
    }, 1000);
});

$(".collapse").on("click", "a", function () {
    $(".navbar-collapse").removeClass("show");
    $(".line").removeClass("active-line");
});

/* Validacion ajax en formulario  */
$(".form-contact").bind("submit", function () {
    $.ajax({
        type: $(this).attr("method"),
        url: $(this).attr("action"),
        data: $(this).serialize(),
        success: function () {
            $("#alert-contact").fadeIn();
            $("#send-contact").addClass("hide");
        },
        error: function () {
            alert("error");
        }
    });

    return false;
});

$('.cookies').on('click', 'a', function (e) {
    e.preventDefault();
    $('.cookies').fadeOut();
})

$('.curriculum').on('click', function () {
    $('.links-cv').slideToggle();
})