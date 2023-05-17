function solution(k, m, score) {
    if(score.length < m){
        return 0;
    }
    
    score.sort((a, b) => a - b);
    
    let answer = 0;
    
    while(score.length >= m){
        const box = score.splice(score.length - m, m);
        
        const prize = m * box[0];
        
        answer += prize;
    }
    
    return answer;
}