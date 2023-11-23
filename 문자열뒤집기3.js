function solution(my_string, s, e) {
    let answer = '';
    let strArray = [];

    for (let i = 0; i < my_string.length; i++) {
        strArray[i] = my_string.charAt(i);
    }

    while (s < e) {
        let temp = strArray[s];
        strArray[s] = strArray[e];
        strArray[e] = temp;
        s++;
        e--;
    }

    for (let i = 0; i < strArray.length; i++) {
        answer += strArray[i];
    }

    return answer;
}