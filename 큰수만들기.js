function solution(number, k) {
    let stack = [];
    let answer = '';
    
    for(let i = 0; i<number.length; i++){
        let elm = number[i];
        
        while(k>0 && stack[stack.length-1] < elm){
            stack.pop();
            k--;
        }
        stack.push(elm);
    }
    stack.splice(stack.length-k,k);
    answer = stack.join("");
    return answer;
}