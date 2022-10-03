let theme = document.getElementById("theme");
let body = document.querySelector("body");
let grid = document.querySelector(".grid");
let heading = document.querySelector(".heading");
let thmwrd = document.querySelector('.word-theme');
let nums = document.querySelector('.w-embed');
let barStyle = document.querySelector('[data="test"]');

let blubtn = document.querySelectorAll('.blue-btn');
let equal = document.querySelector('.equal');


let mainKey = document.querySelectorAll('.numpad-button');

function themeChange () {
    console.log(localStorage.themeVal)
    console.log(typeof(localStorage.themeVal))
    if (typeof(localStorage.themeVal) !== 'string') {
        localStorage.setItem('themeVal', 1)
    };

    body.style.backgroundColor = "var(--mainBG"+localStorage.themeVal+")";
    grid.style.backgroundColor = "var(--keybrdBG"+localStorage.themeVal+")";
    calcWindow.style.backgroundColor = "var(--screenBG"+localStorage.themeVal+")";
    calcWindow.style.color = "var(--scrntxt"+localStorage.themeVal+")";
    heading.style.color = "var(--scrntxt"+localStorage.themeVal+")";
    thmwrd.style.color = "var(--scrntxt"+localStorage.themeVal+")";
    nums.style.color = "var(--scrntxt"+localStorage.themeVal+")";

    for (let i = 0; i < mainKey.length; i++) {
        mainKey[i].style.backgroundColor = "var(--mainkeyBG"+localStorage.themeVal+")";
        mainKey[i].style.color = "var(--keytxtBG"+localStorage.themeVal+")";
        mainKey[i].style.boxShadow = "0 4px 1px -1px var(--mainkeySD"+localStorage.themeVal+")";
    }

    for (let i = 0; i < blubtn.length; i++) {
        blubtn[i].style.backgroundColor = "var(--keyBG"+localStorage.themeVal+")";
        blubtn[i].style.boxShadow = "0 4px 1px -1px var(--keySD"+localStorage.themeVal+")";
    }

    equal.style.backgroundColor = "var(--eqkeyBG"+localStorage.themeVal+")";
    equal.style.boxShadow = "0 4px 1px -1px var(--eqkeySD"+localStorage.themeVal+")";
    equal.style.color = "var(--eqTXT"+localStorage.themeVal+")";

    theme.style.backgroundColor = "var(--keybrdBG"+localStorage.themeVal+")";
    barStyle.innerHTML = "#theme::-webkit-slider-thumb { background-color: var(--eqkeyBG"+localStorage.themeVal+")} #theme::-moz-range-thumb { background-color: var(--eqkeyBG"+localStorage.themeVal+")};"

    theme.value=localStorage.themeVal;
}


document.addEventListener('keydown', (key) => {
    if (key.key === "ArrowLeft" || key.key === "ArrowDown") {
        localStorage.themeVal = Math.max(localStorage.themeVal-1, 1);
    }
    if (key.key === "ArrowRight" || key.key === "ArrowUp" ) {
        localStorage.themeVal = Math.min(parseFloat(localStorage.themeVal)+1, 3);
    }
    themeChange();
})


themeChange();