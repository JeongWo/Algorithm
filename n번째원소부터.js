function solution(num_list, n) {
    if (n < 1 || n > num_list.length) {
        return [];
    }

    let answer = [];

    for (let i = n - 1; i < num_list.length; i++) {
        answer.push(num_list[i]);
    }

    return answer;
}
