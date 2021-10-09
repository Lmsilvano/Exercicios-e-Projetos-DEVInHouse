const sContent = document.querySelectorAll(".s_content")
const tl = new TimelineMax()


function animationGrow(elem) {
    elem.style = 'height:0px'
    requestAnimationFrame(() => {
        elem.style = 'height: 450px';
    });
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
    e.preventDefault();
    const el = e.target;
    if (el.classList.contains('reveal')) {
        let divreveal = el.nextElementSibling;
        let parent = el.parentElement;
        animationGrow(parent)
        setTimeout(() => {
            animationO(divreveal, 'oi')
            divreveal.style = "display:flex; flex-direction: column"
        }, 650)
        animationO(el, 'in')
        // if (el.style.opacity === '0') {
        //     animationO(el, 'out')
        //     return
        // } else {
        //     animationO(el, 'in')
        //     // setTimeout(() => {
        //     //     el.remove();
        //     // }, 1500)

        // }


        parent.addEventListener("mouseleave", function (e2) {
            animationO(divreveal, 'in')

        })

    };
});

