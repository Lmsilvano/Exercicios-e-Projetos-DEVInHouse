
function animationGrow(elem, arg) {
    if (arg === 'reduce') {
        elem.style = 'height:450px'
        requestAnimationFrame(() => {
            elem.style = 'height: auto;';
        });
        return
    } else {
        elem.style = 'height:0px'
        requestAnimationFrame(() => {
            elem.style = 'height: 450px';

        })
        return
    };
}
function animationO(elem, arg) {
    if (arg === 'in') {
        elem.style = 'opacity:1'
        requestAnimationFrame(() => {
            elem.style = 'opacity: 0';
        });
        return

    } else if (arg === 'out') {
        elem.style = 'opacity:0'
        requestAnimationFrame(() => {
            elem.style = 'opacity: 1';
        });
        return

    } else {
        elem.classList.add('faded-out');
        requestAnimationFrame(() => {
            elem.classList.remove('faded-out');
        });
        return
    }
}


//w 319 h 390


document.addEventListener("click", function (e) {
    // e.preventDefault();
    const el = e.target;
    if (el.classList.contains('reveal')) {
        let divreveal = el.nextElementSibling;
        let parent = el.parentElement;

        animationO(el, 'in')
        el.style.display = 'none'
        setTimeout(() => {
            animationGrow(parent)
        }, 150)
        setTimeout(() => {
            animationO(divreveal, 'oi')
            divreveal.style = "display:flex;"
        }, 650)
        return

    };

    if (el.classList.contains('hiddenSC')) {
        console.log('algumacoisa')
        return
    }

});

