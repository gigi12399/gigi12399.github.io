class Calculator {
    
    constructor(previous,current){
        this.current = current;
        this.previous = previous;
        this.clear();
    }

    clear(){
        this.currentOperand = "";
        this.previousOperand = "";
        this.operator = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.'))return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operator){
        if(this.currentOperand == '')return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operator = operator
        this.previousOperand = this.currentOperand + this.operator
        this.currentOperand = ''


    }

    compute(){
        let result 
        let cur = parseFloat(this.currentOperand)
        let pre = parseFloat(this.previousOperand)
        if(isNaN(cur)) return
        switch(this.operator){
            case '+':
                result = pre + cur
                break
            case '-':
                result = pre - cur
                break
            case 'x':
                result = pre * cur
                break
            case '÷':
                result = pre / cur
                break
            default:
                return 
        }
        this.currentOperand = result
        this.previousOperand = ''
        this.operator = undefined

    }
    
    updateDisplay(){
        this.current.innerText = this.currentOperand;
        this.previous.innerText = this.previousOperand;
    }
    
}

const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const allClearButton = document.querySelector('.allClear');
const deleteButton = document.querySelector('.delete');
const previous = document.querySelector('.previous');
const current = document.querySelector('.current');


const calculator = new Calculator(previous,current);

numberButton.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operatorButton.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})
    
equalButton.addEventListener('click', () =>{
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click',() =>{
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click',() =>{
    calculator.delete();
    calculator.updateDisplay();
})
