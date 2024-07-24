let display = document.getElementById('display');
let buttons = document.querySelectorAll('button[type="button"]');

let calculator = {
    displayValue: '',
    firstOperand: null,
    operator: null,

    handleButtonPress: function(buttonValue) {
        switch (buttonValue) {
            case '=':
                this.calculate();
                break;
            case 'C':
                this.clear();
                break;
            default:
                this.appendValue(buttonValue);
        }
    },

    appendValue: function(value) {
        this.displayValue += value;
        display.value = this.displayValue;
    },

    calculate: function() {
        let result = eval(this.displayValue);
        this.displayValue = result;
        display.value = this.displayValue;
    },

    clear: function() {
        this.displayValue = '';
        display.value = this.displayValue;
    }
};

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        calculator.handleButtonPress(button.value);
    });
});