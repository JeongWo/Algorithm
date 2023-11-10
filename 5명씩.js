function solution(names) {
    let answer = [];

    for (let i = 0; i < names.length; i += 5) {
        let group = [];

        for (let j = 0; j < 5 && i + j < names.length; j++) {
            group.push(names[i + j]);
        }

        answer.push(group[0]);
    }

    return answer;
}