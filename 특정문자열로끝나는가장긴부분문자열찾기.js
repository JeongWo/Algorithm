function solution(myString, pat) {
    let answer = '';
    const lastIndex = myString.lastIndexOf(pat);
    if (lastIndex !== -1) {
        answer = myString.substring(0, lastIndex + pat.length);
    }

    return answer;
}