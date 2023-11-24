document.addEventListener("scroll", function () {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;
    getStarted = document.querySelector('#nav ul li:nth-of-type(5)');
    
    if (scrollPosition < 300) {
        header.style.backgroundColor = '#ffc017';
        getStarted.style.backgroundColor = 'black';
    } else {
        header.style.backgroundColor = '#ffffff';
        getStarted.style.backgroundColor = '#1A8917';
    }
})

