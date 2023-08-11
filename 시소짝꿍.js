function solution(weights) {
    let result = 0
    let store = Array(5000).fill(0)
    let isInt = (n) => n % 1 === 0 ? n : 0 
    weights.forEach(w => {
        result += store[w] + store[w * 2] 
        if (isInt(w / 2)) result += store[w / 2] 
        if (isInt(w * 2 / 3)) result += store[w * 2 / 3] 
        if (isInt(w * 3 / 2)) result += store[w * 3 / 2] 
        if (isInt(w * 3 / 4)) result += store[w * 3 / 4] 
        if (isInt(w * 4 / 3)) result += store[w * 4 / 3] 
        store[w] += 1
    })
    return result
}