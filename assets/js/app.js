// navbar
let label = document.querySelector( "#label" )
let navbox = document.querySelector( ".nav-box" )

label.addEventListener( "click", function ()
{
    navbox.classList.toggle( "left-0" )
} )
// navbar





$( '.slide' ).slick( {
    dots: false,
    arrows: true,
    infinite: true,
    prevArrow: ".prev-btn",
    nextArrow: ".next-btn",
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },

    ]
} );