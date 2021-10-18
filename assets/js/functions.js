//                                                                   ANIMATIONS

function MenuNavAnimation(arg, mainsec) {
    let tasks = document.querySelectorAll('.s_content')
    tasks.forEach((task, i) => {
        animationO(task, 'out')
        task.remove()
    })
    arg.forEach((task, i) => {
        animationO(DOMconstructor(mainsec, task), 'in')
    })

}

function MainNavAnimation(navMenu, MnavMenu, arg, mainsec) {
    animationO(navMenu, 'in')
    animationO(MnavMenu, 'out')
    setTimeout(() => { MnavMenu.remove() }, 0)
    arg.forEach((task, i) => {
        setTimeout(() => { animationO(DOMconstructor(mainsec, task), 'in') }, 250 * (i + i))
    })
}

function animationGrow(elem, arg) {
    if (arg === 'reduce') {
        elem.style = 'height:550px'
        requestAnimationFrame(() => {
            elem.style = 'height: 90px';
        });
        return
    } else {
        elem.style = 'height:90px'
        requestAnimationFrame(() => {
            elem.style = 'height: 550px';

        })
        return
    };
}
function animationO(elem, arg) {
    if (arg === 'out') {
        elem.style = 'display: flex; opacity: 1;'
        requestAnimationFrame(() => {
            elem.style = 'display: flex; opacity: 0;';
        });
        return
    } else if (arg === 'in') {
        elem.style = 'display: flex; opacity: 0;'
        requestAnimationFrame(() => {
            elem.style = 'display: flex; opacity: 1; cursor:pointer;';

        });
        return
    }
}
function ClickAnimationGROW(divChild, divParent, tittleF) {
    console.log(divChild, divParent, tittleF)
    animationO(tittleF, 'out')
    setTimeout(() => {
        animationGrow(divParent, 'a')
    }, 150)
    setTimeout(() => {
        animationO(divChild, 'in')
    }, 650)
}
//                                                                   END
//                                                                   DOM MANIPULATION
function DOMconstructor(parent, contentObjt) {
    let divParent = createAndSet('div', 'class', 's_content')
    let tittleF = createAndSet('p', 'class', 'reveal')
    tittleF.innerText = contentObjt.tittle
    divParent.appendChild(tittleF)
    let divChild = createAndSet('div', 'class', 'hiddenSC')
    let description = createAndSet('p', 'class', 'description')
    let linkDiv = createAndSet('div', 'class', 'link_div')
    let link = createAndSet('a', 'class', 'h_a')
    link.setAttribute('href', contentObjt.url)
    link.setAttribute('target', '_blank')
    link.innerText = 'Conferir'
    linkDiv.appendChild(link)
    description.innerHTML = `<strong>Descrição :</strong> ${contentObjt.description}`
    divChild.appendChild(description)
    divChild.appendChild(linkDiv)
    divChild.insertAdjacentHTML('afterbegin', `<a href="${contentObjt.git}" target="_blank"><i class="fab fa-github"></i></a>`)
    divParent.appendChild(divChild)
    divParent.addEventListener('click', (e) => { ClickAnimationGROW(divChild, divParent, tittleF) })
    return parent.appendChild(divParent)

}

function createAndSet(type, attribute, attributeName) {
    let a = document.createElement(type)
    a.setAttribute(attribute, attributeName)
    return a
}



export { animationO, animationGrow, createAndSet, DOMconstructor, MenuNavAnimation, MainNavAnimation }



