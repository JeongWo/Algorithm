function solution(number, limit, power) {
    var answer = 0;
  
    for (var i = 1; i <= number; i++) {
      var d = 0;
      for (var j = 1; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          if (i / j === j) d += 1;
          else d += 2;
        }
        if (d > limit) {
          d = power;
          break;
        }
      }
      answer += d;
    }
    
    return answer;
  }
  