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
    body.style.backgroundColor = "var(--mainBG"+theme.value+")";
    grid.style.backgroundColor = "var(--keybrdBG"+theme.value+")";
    calcWindow.style.backgroundColor = "var(--screenBG"+theme.value+")";
    calcWindow.style.color = "var(--scrntxt"+theme.value+")";
    heading.style.color = "var(--scrntxt"+theme.value+")";
    thmwrd.style.color = "var(--scrntxt"+theme.value+")";
    nums.style.color = "var(--scrntxt"+theme.value+")";

    for (let i = 0; i < mainKey.length; i++) {
        mainKey[i].style.backgroundColor = "var(--mainkeyBG"+theme.value+")";
        mainKey[i].style.color = "var(--keytxtBG"+theme.value+")";
        mainKey[i].style.boxShadow = "0 4px 1px -1px var(--mainkeySD"+theme.value+")";
    }

    for (let i = 0; i < blubtn.length; i++) {
        blubtn[i].style.backgroundColor = "var(--keyBG"+theme.value+")";
        blubtn[i].style.boxShadow = "0 4px 1px -1px var(--keySD"+theme.value+")";
    }

    equal.style.backgroundColor = "var(--eqkeyBG"+theme.value+")";
    equal.style.boxShadow = "0 4px 1px -1px var(--eqkeySD"+theme.value+")";
    equal.style.color = "var(--eqTXT"+theme.value+")";

    theme.style.backgroundColor = "var(--keybrdBG"+theme.value+")";
    barStyle.innerHTML = "#theme::-webkit-slider-thumb { background-color: var(--eqkeyBG"+theme.value+")} #theme::-moz-range-thumb { background-color: var(--eqkeyBG"+theme.value+")};"

}


document.addEventListener('keydown', (key) => {
    if (key.key === "ArrowLeft" || key.key === "ArrowDown") {
        theme.value = Math.max(theme.value-1, 1);
    }
    if (key.key === "ArrowRight" || key.key === "ArrowUp" ) {
        theme.value = Math.min(parseFloat(theme.value)+1, 3);
    }
    themeChange();
})


themeChange();