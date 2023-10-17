window.onload = function () {
    document.querySelector('input[tabindex="0"]').focus()
}

let calculationDone = false;


function clearDisplay() {
    document.getElementById("result").value = '';
}



function display(myvar) {

    if (document.getElementById("result").value === "Invalid operation" || calculationDone) {
        document.getElementById("result").value = ""
        calculationDone = false
    }
    document.getElementById("result").value += myvar;
}




function calculate() {

    try {
        var calc = eval(document.getElementById('result').value)
        document.getElementById("result").value = calc;
        calculationDone = true;

        if ([".", "undefined"].includes(calc.toString())) {
            throw new error()
        }

    }
    catch (err) {
        err.message = "Invalid operation"
        document.getElementById('result').value = err.message


    }

}




function keyPress(event) {

    if (document.getElementById('result').value == "Invalid operation") {
        clearDisplay()
    }

    key = event.key;
    if ('0123456789/*-+.'.includes(key))
        display(key)

    else if (('Enter') === key || '=' === key) {
        calculate()
    }

    else if ('c' === key.toLowerCase()) {
        clearDisplay()
    }

    else if (key === 'Backspace') {
        let currentValue = document.getElementById('result').value.slice(0, -1)
        document.getElementById('result').value = currentValue
    }



}

