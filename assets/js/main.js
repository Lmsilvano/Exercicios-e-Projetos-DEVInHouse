const sContent = document.querySelectorAll(".s_content")
const tl = new TimelineMax()

function animeExpand(arg) {
    tl.fromTo(arg, 1, { height: "0" }, { height: "450px", ease: Power2.easeInOut });

}

function animationO(elem, arg) {
    if (arg === 'in') {
        elem.style = 'opacity:1'
        requestAnimationFrame(() => {
            elem.style = 'opacity: 0';
        });

        return
        //elem.classList.add('faded-in');
        //requestAnimationFrame(() => {
        //   elem.classList.remove('faded-in');
        // });
    } else if (arg === 'out') {

        elem.style = 'opacity:0'
        requestAnimationFrame(() => {
            elem.style = 'opacity: 1';
        });
        return
        // elem.classList.add('faded-out');
        // requestAnimationFrame(() => {
        //     elem.classList.remove('faded-out');
        // });
    } else {
        elem.classList.add('faded-out');
        requestAnimationFrame(() => {
            elem.classList.remove('faded-out');
        });

    }
}

function teste(algo) {
    algo.style = "display:flex; flex-direction: column"
}
//w 319 h 390
async function fullanime(elem, arg, elem2, arg2, arg3) {
    Promise.resolve(animationO(elem, arg))
        .then(() => { animation(arg3) })
        .then(() => teste(elem2))
        .then(() => animationO(elem2, arg2))

}

document.addEventListener("click", function (e) {
    e.preventDefault();
    const el = e.target;
    if (el.classList.contains('reveal')) {
        let divreveal = el.nextElementSibling;
        let parent = el.parentElement;
        animation(parent)
        divreveal.style = "display:flex; flex-direction: column"
        animationO(divreveal, 'ooi')
        //fullanime(el, 'in', divreveal, 'n', parent)



        if (el.style.opacity === '0') {
            animationO(el, 'out')
            return
        } else {
            animationO(el, 'in')
            // setTimeout(() => {
            //     el.remove();
            // }, 1500)

        }


        // divreveal.addEventListener("mouseleave", function (e2) {
        //     e2.preventDefault();
        //     // divreveal.style.display = "none"
        //     animationO(el, 'oi')
        //     console.log(el)
        //     el.style.display = 'block'

        // })

    };
});

