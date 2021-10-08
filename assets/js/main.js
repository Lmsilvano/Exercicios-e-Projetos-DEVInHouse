const sContent = document.querySelectorAll(".s_content")
const tl = new TimelineMax()

function animation(arg) {
    tl.fromTo(arg, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut });

}

function animationO(elem, arg) {
    if (arg === 'in') {
        elem.classList.add('faded-in');
        requestAnimationFrame(() => {
            elem.classList.remove('faded-in');
        });
    } else {
        elem.classList.add('faded-out');
        requestAnimationFrame(() => {
            elem.classList.remove('faded-out');
        });
    }
}
//


document.addEventListener("click", function (e) {
    e.preventDefault();
    const el = e.target;
    if (el.classList.contains('reveal')) {
        let divreveal = el.nextElementSibling;
        animationO(divreveal, 'oi')
        divreveal.style.display = "inline-block";
        el.style.display = "none"
        animationO(el, 'in')


        divreveal.addEventListener("mouseleave", function (e2) {
            e2.preventDefault();
            divreveal.style.display = "none"
            animationO(el, 'oi')
            el.style.display = 'block'

        })

    };
});

