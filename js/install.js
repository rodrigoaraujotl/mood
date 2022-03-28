function slickBrands(){
    $('.r-home__general--caroussel ul').slick({
        slidesToShow: 5,
        slidesToScroll: 1
    })
}

$(document).ready(function(){
    setTimeout(function(){
        slickBrands();
    },1000);
})