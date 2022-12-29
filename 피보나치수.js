function solution(n) {
    var a = 0, b = 1, answer = 1;
    for (var i = 2; i <=n; i++){
        answer = a + b;
        a = b;
        b = answer;
    }
    return answer;
}