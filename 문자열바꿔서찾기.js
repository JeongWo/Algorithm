function solution(myString, pat) {
    let answer = 0;
    let patLength = pat.length;

    for (let i = 0; i <= myString.length - patLength; i++) {
        let substring = '';

        for (let j = i; j < i + patLength; j++) {
            if (myString[j] === 'A') {
                substring += 'B';
            } else if (myString[j] === 'B') {
                substring += 'A';
            } else {
                substring += myString[j];
            }
        }

        if (substring === pat) {
            answer = 1;
            break;
        }
    }

    return answer;
}