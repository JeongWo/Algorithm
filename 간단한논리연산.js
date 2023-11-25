function solution(x1, x2, x3, x4) {
    let part1 = x1 || x2;
    let part2 = x3 || x4;
    var answer = part1 && part2;
    return answer;
}