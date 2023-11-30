function solution(binomial) {
    const binomialop = /^(\d+)\s*([+\-*])\s*(\d+)$/;
    const match = binomial.match(binomialop);

    if (match) {
        const [, operand1, operator, operand2] = match; 

        const num1 = parseInt(operand1);
        const num2 = parseInt(operand2);

        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            default:
                return 0;
        }
    } else {
        return 0;
    }
}