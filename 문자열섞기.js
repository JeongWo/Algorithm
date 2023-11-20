function solution(str1, str2) {
    let answer = '';
    let length = str1.length;

    for (let i = 0; i < length; i++) {
        answer += str1[i] + str2[i];
    }

    return answer;
}