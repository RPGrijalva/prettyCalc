let mathProblem = [];

const calcWindow = document.querySelector(".calc-window");

function addCommas(intNum) {
    return (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

function useCalc(btn) {
    
    if (typeof(btn) === 'object') btn=btn.innerHTML;
    console.log(btn);
    if (
        (mathProblem[mathProblem.length - 1] === "x" || mathProblem[mathProblem.length - 1] === "+" || mathProblem[mathProblem.length - 1] === "-" || mathProblem[mathProblem.length - 1] === "/"|| mathProblem[mathProblem.length - 1] === "." || mathProblem.length === 0)
        && 
        (btn ==="x" || btn ==="+" || btn ==="-" || btn ==="/")
        ) {
            return;
    }
    if (btn === "DEL") {
        mathProblem.length = mathProblem.length - 1;
        if (mathProblem.length == '0') {
            calcWindow.innerHTML = "Enter Problem";
            return;
        }
        calcWindow.innerHTML = addCommas(mathProblem.join(""));
        return;
    }
    if (btn === "RESET") {
        mathProblem = [];
        calcWindow.innerHTML = "Enter Problem";
        return;
    }
    if (btn === ".") {
        for (let i = mathProblem.length; i >=0; i--) {
            if (mathProblem[i] === ".") {
                return;
            }
            if (mathProblem[i] === "x" || mathProblem[i] === "+" || mathProblem[i] === "-" || mathProblem[i] === "/") {
                i = 0;
            }
        }
    }
    if(btn ==="=") {
        if (mathProblem[mathProblem.length - 1] === "x" || mathProblem[mathProblem.length - 1] === "+" || mathProblem[mathProblem.length - 1] === "-" || mathProblem[mathProblem.length - 1] === "/") mathProblem.length = mathProblem.length -1;
        for (let i=0; i < mathProblem.length -1; i++) {
            if (mathProblem[i]==="x") {
                mathProblem[i]="*"
            }
        }

        mathProblem = eval(mathProblem.join(''));
        mathProblem = mathProblem.toString();
        calcWindow.innerHTML=(addCommas(mathProblem));
        mathProblem = mathProblem.split('');
        console.log(mathProblem);

        
        return;
    }

    mathProblem.push(btn);

    let newStart = 0;
    let forWindow = [];
    for (let i = 0; i <= mathProblem.length; i++) {
    if (mathProblem[i] === '/' || mathProblem[i] === '-' ||  mathProblem[i] === '+' || mathProblem[i] === 'x' || mathProblem[i] === '.') {
        forWindow.push(addCommas(mathProblem.slice(Math.max(0,newStart), i).join('')));  
        forWindow.push(mathProblem[i])
        newStart = i+1;
    }
    if (i === mathProblem.length) {
        forWindow.push(addCommas(mathProblem.slice(Math.max(0,newStart), i).join('')));
    }
     }

    calcWindow.innerHTML = addCommas(forWindow.join(""));
    forWindow = []
    
}

document.addEventListener('keydown', (key) => {
    console.log (key.key)
    if (key.key.match(/[0-9x/+-=]/)) {
        useCalc(key.key);
        return;
    }
    if (key.key === '*') {
        useCalc('x');
        return;
    }
    if (key.key === 'Enter') {
        useCalc('=');
        return
    }
    if (key.key === 'Backspace' || key.key ==='Del') {
        useCalc('DEL');
    }
    if (key.key === 'Escape') {
        useCalc('RESET');
    }
})

calcWindow.innerHTML="Enter Problem";