function solution(arr, flag) {
    var answer = [];
    var answerLength = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (flag[i] === true) {
            for (let j = 0; j < arr[i] * 2; j++) {
                answer[answerLength] = arr[i];
                answerLength++;
            }
        } else {
            if (answerLength >= arr[i]) {
                answerLength -= arr[i];
            } else {
                answerLength = 0;
            }
        }
    }
    
    var truncatedAnswer = [];
    for (let k = 0; k < answerLength; k++) {
        truncatedAnswer[k] = answer[k];
    }
    
    return truncatedAnswer;
}