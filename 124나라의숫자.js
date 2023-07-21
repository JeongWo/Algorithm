function solution(n) {
    let answer = '';
    let arr = [4, 1, 2];

    while(n) {
        answer = arr[n%3] + answer;
        n = parseInt((n-1)/3);
    }
    return answer;
}