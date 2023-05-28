function solution(lottos, win_nums) {
    let answer = [];
    
    let correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
    
    let zeros = lottos.filter(lotto => lotto === 0).length;
    console.log(correct, zeros);
    
    let min = 7-correct >= 6 ? 6 : 7-correct;
    let max = min-zeros < 1 ? 1 : min-zeros;
    
    answer = [max, min]
    return answer;
}