function animationGrow(elem, arg) {
    if (arg === 'reduce') {
        elem.style = 'height:450px'
        requestAnimationFrame(() => {
            elem.style = 'height: 50px';
        });
        return
    } else {
        elem.style = 'height:50px'
        requestAnimationFrame(() => {
            elem.style = 'height: 450px';

        })
        return
    };
}
function animationO(elem, arg) {
    if (arg === 'in') {
        elem.style = 'display: flex; opacity: 1;'
        requestAnimationFrame(() => {
            elem.style = 'display: flex; opacity: 0;';
        });
        return
    } else if (arg === 'out') {
        elem.style = 'display: flex; opacity: 0;'
        requestAnimationFrame(() => {
            elem.style = 'display: flex; opacity: 1;';

        });
        return
    }
}


document.addEventListener("click", function (e) {
    e.stopPropagation();
    const el = e.target;
    if (el.classList.contains('reveal')) {
        let divreveal = el.nextElementSibling;
        let parent = el.parentElement;

        animationO(el, 'in')
        setTimeout(() => {
            animationGrow(parent)
        }, 150)
        setTimeout(() => {
            animationO(divreveal, 'out')
        }, 650)
        parent.addEventListener("mouseleave", (e2) => {
            e2.stopPropagation();
            if (parent.style.height === '50px') {
                e2.stopImmediatePropagation();;
                return
            }
            setTimeout(() => {
                animationO(divreveal, 'in')
            }, 350)
            setTimeout(() => {
                animationGrow(parent, 'reduce')
                divreveal.style = 'display: none;'
            }, 750)
            setTimeout(() => {
                animationO(el, 'out')
            }, 950)

        })



    };

});
