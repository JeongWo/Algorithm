function solution(n) {
    let answer 
    let k1 = 0
    let k2 = 1;
    
    for(let i = 2 ; i <= n + 1 ; i++) {
        answer = k1 + k2 % 1234567;
        k1 = k2;
        k2 = answer;
    }
    return answer % 1234567;
}