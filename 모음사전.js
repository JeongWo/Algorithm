function solution(word) {
    let obj = { A: 0, E: 1, I: 2, O: 3, U: 4 };
    let plus = [781, 156, 31, 6, 1];

    return word.split("").reduce((acc, ch, idx) => acc + obj[ch] * plus[idx] + 1, 0);
}