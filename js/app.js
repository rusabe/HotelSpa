function getHeight(){
    var height = $('section.promo, section.promo-video').height();
    $("#overlay").css({'height' : height+'px'});

}
$(function() {
    getHeight();
    $("#gallery a").on('click', function() {
        var image = $(this).find('img').attr('src');
        var imageSelected = image.split('thumbnail');
        var fullsizeImage = imageSelected[0] + 'fullsize' + imageSelected[1];
        $("#imageContainer").attr('src', fullsizeImage);
    })
})

$(document).ready(function () {
    $(window).resize(function() {
        getHeight();
    });
});

$(document).foundation();
