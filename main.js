const valButtons = document.querySelectorAll(".val")
const arthButtons = document.querySelectorAll(".action:not(.ac,.del,.equal)")
const acButton = document.querySelector(".ac")
const delButton = document.querySelector(".del")
const equalButton = document.querySelector(".equal")
const display = document.querySelector(".display")
let cond = true

valButtons.forEach(el => {
    el.addEventListener("click", function () {
        display.textContent += this.dataset.value
        cond = true
    })
})
arthButtons.forEach((el) => {
    el.addEventListener("click", function () {
        const text = display.textContent
        if (cond === true && /(\*|\+|\-|\/|\.|\s)/.test(text[text.length - 1])) {
            display.textContent += this.dataset.value
            cond = false
        }
    })
})
acButton.addEventListener("click", function () {
    display.textContent = ""
    cond = true
})
delButton.addEventListener("click", function () {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1)
    cond = true


})
equalButton.addEventListener("click", function () {
    display.textContent = eval(display.textContent)
    cond = true
})