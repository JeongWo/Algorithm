function solution(n) {
    let answer = [];
    let hanoi = (n, from, to, vi) => {
      if (n === 1) {
        answer.push([from, to]);
        return;
      }
      hanoi(n - 1, from, vi, to);
      answer.push([from, to]);
        
      hanoi(n - 1, vi, to, from);
    };
    hanoi(n, 1, 3, 2);
    return answer;
  }