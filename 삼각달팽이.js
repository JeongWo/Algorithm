function solution(n) {
    let graph = [];
    let answer = [];
    let y = -1
    let x = 0
    let number = 1
  
    for (let i = 1; i < n + 1; i++) {
        let tmp = Array(i).fill(0)
        graph.push(tmp)
    }
    
    for (let i=0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i % 3 === 0) {
                y +=1
            }else if (i % 3 === 1) {
                x += 1
            }else{
                y -= 1
                x -= 1
            }
            graph[y][x] = number
            number += 1
        }
    }
    for (let i = 0; i < n; i++) {
        answer = answer.concat(graph[i])
    }
    return answer;
}