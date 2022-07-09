var fval = 0

function inp(val) {
    if (fval === 1 && val !== "+" && val !== "-" && val !== "*" && val !== "/") {
        fval = 0
        document.getElementById("val").value = ""
        document.getElementById("val").value+=val
    }
    else {
        fval=0
        document.getElementById("val").value+=val
    }
    
}

function zero() {
    var calc = document.getElementById("val").value
    if (calc.length === 1 && calc === "0"){}
    else {
        document.getElementById("val").value = calc+0
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
