function solution(numbers) {
    var answer = [];
    var set = new Set();
    for(let i = 0; i < numbers.length; ++i){
        let sum = 0;
        for(let j = 0; j < numbers.length; ++j){
            if(i != j){
                set.add(numbers[i] + numbers[j]);
            }
        }
    }
    set.forEach((number)=>{
        answer.push(number);
    })
    answer.sort((a,b)=>(a-b));
    return answer;
}