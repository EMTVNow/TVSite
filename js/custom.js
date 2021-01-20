$('#mainNav').css('background-color','transparent');

window.addEventListener('scroll', function() {
    if(window.scrollY == 0) {
        $('#mainNav').css('background-color', 'transparent');
    }else {
        $('#mainNav').css('background-color', '#121238');
    }
})