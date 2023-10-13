function solution(my_string) {
    let num = my_string.match(/\d/g);
    let answer = 0;

    for ( let sum of num) {
        answer+=parseInt(sum)
    }

    return answer;
}