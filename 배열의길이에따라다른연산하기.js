function solution(arr, n) {
    var answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.length % 2 !== 0 && i % 2 === 0) {
            answer[i] = arr[i] + n;
        } else if (arr.length % 2 === 0 && i % 2 !== 0) {
            answer[i] = arr[i] + n;
        } else {
            answer[i] = arr[i];
        }
    }

    return answer;
}