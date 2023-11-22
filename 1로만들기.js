function solution(num_list) {
    let answer = 0;
    for (let i = 0; i < num_list.length; i++) {
        let current = num_list[i];
        while (current > 1) {
            if (current % 2 === 0) {
                current /= 2;
            } else {
                current = (current - 1) / 2;
            }
            answer++;
        }
    }
    return answer;
}