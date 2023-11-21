function solution(my_string, indices) {
    let answer = '';

    for (let i = 0; i < my_string.length; i++) {
        let found = false;
        for (let j = 0; j < indices.length; j++) {
            if (i === indices[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            answer += my_string[i];
        }
    }

    return answer;
}