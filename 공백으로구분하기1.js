function solution(my_string) {
    let answer = [];
    let word = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] !== ' ') {
            word += my_string[i];
        } else {
            answer[answer.length] = word;
            word = '';
        }
    }
    answer[answer.length] = word;
    return answer;
}