var fval = 0

function inp(input) {
    var calc = document.getElementById("val").value;
    var last = calc.split('').pop();
    if (calc.length === 0 && input ==="/") {}
    else if (input === "." && (last === "." || last === "(" || last === ")")){}
    else if (input === "(" && (last === "(" || last === ")" || last === ".")){}
    else if (input === "(" && (last === "0" || last == "1" || last === "2" || last == "3" || last === "4" || last == "5" || last === "6" || last == "7" || last === "8" || last == "9" || last === ".")) {}
    else if(input === ")" && calc.length === 0) {}
    else if (input === ")" && (last === ")" || last === "(" || last === ".")){}
    else if (input === ")" && (last === "+" || last === "-" || last === "*" || last === "/" || last === ".")){}
    else if ((input === "+" || input === "-" || input === "*" || input === "/") && (last === "+" || last === "-" || last === "*" || last === "/")) {
        var newchar = input.toString()
        calc = calc.split('')
        calc.pop()
        calc.push(newchar)
        calc = calc.join('')
        document.getElementById("val").value = calc
    }
    else {
        if (fval === 1 && input !== "+" && input !== "-" && input !== "*" && input !== "/") {
            fval = 0
            document.getElementById("val").value = ""
            document.getElementById("val").value+=input
        }
        else {
            fval=0
            document.getElementById("val").value+=input
        }
    }
}

function zero() {
    var calc = document.getElementById("val").value
    var last = calc.split('').pop();
    if (last === "+" || last === "-" || last === "*" || last === "/"){}
    else {
        if (calc.length === 1 && calc === "0"){}
        else {
            document.getElementById("val").value = calc+0
        }
    }
}

function clr() {
    document.getElementById("val").value = ""
}

function equate() {
    var calc = document.getElementById("val").value
    document.getElementById("val").value = eval(calc)
    fval = 1
}

function deleteval() {
    var calc = document.getElementById("val").value
    // var last = calc.split('').pop();
    if (calc.length === 0){}
    // else if (last === ',')
    else {
        calc = calc.split('')
        calc.pop()
        calc = calc.join('')
        document.getElementById('val').value = calc
    }
}