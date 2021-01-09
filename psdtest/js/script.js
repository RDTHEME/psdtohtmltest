//BOOTNAVBAR JS
$(function () {
    $('#main-navbar').bootnavbar({
        //options

        //animation: false

    });
})

$('.speaking-carousel').owlCarousel({
    autoplay:true,
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='img/prev_btn.jpg'>","<img src='img/next_btn.jpg'>"],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})
$('.work-carousel').owlCarousel({
    autoplay:true,
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='img/prev_btn.jpg'>","<img src='img/next_btn.jpg'>"],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
})

$('.article-carousel').owlCarousel({
    autoplay:true,
    loop:true,
    margin:10,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})

$('.recommend-carousel').owlCarousel({
    autoplay:true,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        }
    }
})
