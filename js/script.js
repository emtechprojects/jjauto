const navLinksUl = document.querySelector('.nav-links-ul')
const navLinksLi = document.querySelectorAll('.nav-links-li')

navLinksUl.addEventListener('mouseover', (event) => {
    for (let i = 0; i < navLinksLi.length; i++) {
        const element = navLinksLi[i];
        element.style.display = "block"
    }
    navLinksUl.addEventListener('mouseout', (event) => {
        for (let i = 0; i < navLinksLi.length; i++) {
            const element = navLinksLi[i];
            element.style.display = "none"
        }
    })
})

const logo = document.querySelector('.logo')
const hiddenBanner = document.querySelector('.hidden-banner')

logo.addEventListener('click', (event) => {
    console.log(hiddenBanner.style.animationName)
    hiddenBanner.style.animationName = "drive"
})

function activateScroll() {
    window.addEventListener("scroll", () => {
        const navLinks = document.querySelector("header")
        const navLink = document.querySelectorAll(".nav-link")
        if (window.scrollY > 60) {
            for (let i = 0; i < navLink.length; i++) {
                navLink[i].style.color = "white"
            }
            navLinks.classList.add("active")
        } else {
            for (let i = 0; i < navLink.length; i++) {
                navLink[i].style.color = "grey"
            }
            navLinks.classList.remove("active")
        }
    })
}
activateScroll()

