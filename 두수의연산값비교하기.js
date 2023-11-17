function solution(a, b) {
    let ab1 = parseInt(String(a) + String(b));
    let ab2 = 2 * a * b;
    return ab1 > ab2 ? ab1 : ab2;
}