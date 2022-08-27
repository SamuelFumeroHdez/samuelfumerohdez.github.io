window.onscroll = function() {
    if (document.documentElement.scrollTop > 600) {
        document.querySelector('.go-top-container')
            .classList.add('show');
    } else {
        document.querySelector('.go-top-container')
            .classList.remove('show');
    }
}

function subir_arriba() {
    window.scrollTo(0,0);
}