function solution(data, col, row_begin, row_end) {
    const d = col-1;
    data.sort((a, b) => {
        if (a[d] === b[d]) return b[0] - a[0];
        return a[d] - b[d];
    });

    let answer = 0;

    for (let i = row_begin; i <= row_end; i++) {
        let temp = data[i-1].reduce((a, b) => a + b%i, 0)
        answer^=temp;
    }
    return answer;
}
