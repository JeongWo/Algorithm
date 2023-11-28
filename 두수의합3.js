function solution(a, b) {
    let carry = 0;
    let answer = '';
    
    let maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');
    
    for (let i = maxLength - 1; i >= 0; i--) {
        const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        answer = String(sum % 10) + answer;
        carry = sum >= 10 ? 1 : 0;
    }
    
    if (carry > 0) {
        answer = String(carry) + answer;
    }
    
    return answer;
}