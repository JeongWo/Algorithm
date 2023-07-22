function solution(n, k) {
    let answer = [];
    let people = Array.from({ length: n }, (_, i) => i + 1);
    let num = people.reduce((ac, v) => ac * v, 1)
    
    while (answer.length < n) {
        num = num / people.length;
        answer.push(...people.splice(Math.floor((k - 1) / num), 1));
        k = k % num;
    }

    return answer;
}