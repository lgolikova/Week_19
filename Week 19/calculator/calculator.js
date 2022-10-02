let num1 = document.getElementById('firstNumber');
let num2 = document.getElementById('secondNumber');
let result = document.getElementById('result');


class Calculator{
    static plus(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
    static minus(firstNumber, secondNumber) {     
        return firstNumber - secondNumber;
    }
    static divide(firstNumber, secondNumber) {
        if(secondNumber == 0){  
            alert('На ноль делить нельзя!');      
        } else {
            return firstNumber / secondNumber;
        }
    }
    static multiply(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }
}

function calcSummation(){
    result.value = Calculator.plus(+num1.value, +num2.value);
}
function calcSubtraction(){
    result.value = Calculator.minus(+num1.value, +num2.value);
}
function calcDivision(){
    result.value = Calculator.divide(+num1.value, +num2.value);
}
function calcMultiplication(){
    result.value = Calculator.multiply(+num1.value, +num2.value);
}


function getReset() {
    let inputs = document.querySelectorAll('input[type=text]');
    for (let i=0; i < inputs.length; i++) {
        inputs[i].value = '';
    };
}



