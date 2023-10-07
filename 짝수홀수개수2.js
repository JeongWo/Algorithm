function solution(num_list){
    let answer = [0,0];

    for(let x of num_list){
        answer[x%2] += 1;
    }
    
    return answer;
}