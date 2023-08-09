const olhos = document.querySelectorAll(".olho")

let posX_mouse = 0
let posY_mouse = 0

window.addEventListener("mousemove", (evt) => {
    posX_mouse = evt.clientX
    posY_mouse = evt.clientY

    const rot = Math.atan2(posY_mouse, posX_mouse) * 300 / Math.PI

    olhos.forEach((o) => {
        o.style.transform = "rotate(" + rot + "deg)"
    })
})