function solution(myString) {
    let answer = '';

    for (let i = 0; i < myString.length; i++) {
        const currentChar = myString[i];

        if (currentChar === 'a') {
            answer += 'A';
        } else if (currentChar >= 'B' && currentChar <= 'Z') {
            answer += currentChar.toLowerCase();
        } else {
            answer += currentChar;
        }
    }

    return answer;
}