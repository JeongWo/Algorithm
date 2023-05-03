function solution(size) {
    
    const width = [];
    const height = [];

    for(let i = 0; i < size.length; i++) {
        const max = Math.max(size[i][0], size[i][1]);
        const min = Math.min(size[i][0], size[i][1]);
        width.push(max);
        height.push(min);
    }

    return Math.max(...width) * Math.max(...height);
}