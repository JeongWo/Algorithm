function solution(storey) {
    let answer = Number.MAX_SAFE_INTEGER;
  
    function dfs(num, counter) {
      if (counter >= answer) return;
        
      if (num === 0) answer = counter;
      else {
        let res = num % 10;
          
        dfs(Math.floor(num / 10), counter + res);
        dfs(Math.floor(num / 10) + 1, counter + 10 - res);
      }
    }
    dfs(storey, 0);
    return answer;
  }