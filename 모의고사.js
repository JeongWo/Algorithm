function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1a = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2a = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3a = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1a,a2a,a3a);

    if (a1a === max) {answer.push(1)};
    if (a2a === max) {answer.push(2)};
    if (a3a === max) {answer.push(3)};
    return answer;
}