function solution(arr) {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];

        for (let j = 0; j < currentElement; j++) {
            answer[answer.length] = currentElement;
        }
    }

    return answer;
}