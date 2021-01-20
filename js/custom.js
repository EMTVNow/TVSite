$('#mainNav').hide();

window.addEventListener('scroll', function() {
    if(window.scrollY == 0) {
        $('#mainNav').fadeOut(200);
    }else {
        $('#mainNav').fadeIn(200);
    }
})