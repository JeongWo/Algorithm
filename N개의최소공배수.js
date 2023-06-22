function solution(arr) {
    return arr.reduce((ac, v) => l(ac, v))
}
let g = (a,b) => a%b ? g(b,a%b) : b;
let l = (a,b) => a*b / g(a,b);