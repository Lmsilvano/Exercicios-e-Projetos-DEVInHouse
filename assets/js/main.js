import { MenuNavAnimation, MainNavAnimation } from './functions.js'
import projectData from './pages/mainpage.js'
import exData from './pages/expage.js'
const navMenu = document.querySelector("#navmenu")
const MnavMenu = document.querySelector("#M-navmenu")
const mainsec = document.querySelector(".l-main")


document.getElementById('exercisesMain').addEventListener('click', () => MainNavAnimation(navMenu, MnavMenu, exData, mainsec))
document.getElementById('projectMain').addEventListener('click', () => MainNavAnimation(navMenu, MnavMenu, projectData, mainsec))
document.getElementById('projectNav').addEventListener('click', () => MenuNavAnimation(projectData, mainsec))
document.getElementById('exercisesNav').addEventListener('click', () => MenuNavAnimation(exData, mainsec))







