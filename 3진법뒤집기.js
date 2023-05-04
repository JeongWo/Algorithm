function solution(n) {
    let revers_N = n.toString(3).split('').reverse().join('')
    return parseInt(revers_N, 3)
}