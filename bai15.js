let expressionElement = document.getElementById('expression');
let resultElement = document.getElementById('result');
let currentInput = '';

function appendValue(value) {
    currentInput += value;
    expressionElement.textContent = currentInput;
}

function clearScreen() {
    currentInput = '';
    expressionElement.textContent = '';
    resultElement.textContent = '0';
}

function calculate() {
    try {
        // Thay thế ký hiệu hiển thị thành ký hiệu tính toán chuẩn của JS
        let evalString = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
        let computedResult = eval(evalString);
        
        resultElement.textContent = computedResult;
    } catch (error) {
        resultElement.textContent = 'Lỗi';
    }
}
