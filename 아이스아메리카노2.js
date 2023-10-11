function solution(money) {
    let coffee = 5500;
    let cm = Math.floor(money/coffee);
    let cup = money%coffee;
    let answer = [cm,cup];

    return answer;
}