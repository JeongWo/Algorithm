function solution(n) {
    let answer = [];
    
    answer[0] = n;
    let i = 1;
    
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        answer[i] = n;
        i++;
    }
    
    return answer;
}