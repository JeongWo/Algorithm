function solution(n) {
    let answer = 0;
    let now = 1, count = 1, plus = 0;
  
    while(count <= n) {
      plus = plus + now;
      if(plus >= n) {
        if(plus === n) answer++;
        plus = 0;
        count++;
        now = count;
      } else {
        now++;
      }
    }
  
    return answer;
  }