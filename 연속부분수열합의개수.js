function solution(elements) {
    let answer = new Set();
    
    for (let i = 1; i <= elements.length; i++) {
        
        for (let j = 0; j < elements.length; j++) {
            
            let seq = elements.slice(j, j + i);
            
            if (i + j > elements.length) {
                seq = [...seq, ...elements.slice(0, i + j - elements.length)];
            }
            let sum = seq.reduce((acc, v) => acc + v, 0);
            answer.add(sum);
        }
    }
    return answer.size;
}