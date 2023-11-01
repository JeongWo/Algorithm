function solution(n_str) {
    var answer = '';
    let zero = true;
    
    for(let i = 0; i<n_str.length; i++) {
        if(n_str[i] !== '0' || !zero) {
            answer += n_str[i];
            zero = false;
        }
    }
    
    return answer;
}