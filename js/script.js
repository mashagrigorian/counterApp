let num = 0;

const value = document.querySelector(".value");
const buttons = document.querySelectorAll(".button");

buttons.forEach(e => {
    e.addEventListener("click", e => {
        let number = e.currentTarget.classList;
        number.contains("decrease") ? num-- : number.contains("increase") ? num++ : num = 0,
        value.textContent = num,
        num > 0 ? value.style.color = "green" : num < 0 ? value.style.color = "red" : value.style.color = "black"
    })
})