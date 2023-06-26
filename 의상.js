function solution(clothes) {
    let answer = 1;

    let clothesObj = clothes.reduce((prev, curr) => {
        prev[curr[1]] = (prev[curr[1]] || 1) + 1;
        return prev;
    }, {});

    for (let key in clothesObj) {
        answer *= clothesObj[key];
    }
    return answer - 1;
};