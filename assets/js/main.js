const sContent = document.querySelectorAll(".s_content")
const tl = new TimelineMax()

function animation(arg) {
    tl.fromTo(arg, 1, { height: "0vh" }, { height: "30vh", ease: Power2.easeInOut });

}

function animationO(elem, arg) {
    if (arg === 'in') {
        console.log('entrei')
        elem.style = 'opacity: 1;';
        requestAnimationFrame(() => {
            elem.style = 'opacity: 0;';
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
            el.style.display = "block"
            console.log('foi embora')

        })

    };
});

