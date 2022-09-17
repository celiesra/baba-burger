//JS

$(document).ready(function () {
    
    //Lazy-Load
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazyload"
    });

    //Home_Slider
    const nexticon = "<i class=\"icon-left\"></i>";
    const previcon = "<i class=\"icon-right\"></i>";

    $('.home_slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        navText: [nexticon, previcon],
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            1200:{
                items:1
            },
            1400:{
                items:1
            },
            1600:{
                items:1
            },
        }
    });
    

});