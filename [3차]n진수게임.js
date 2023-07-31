function solution(n, t, m, p) {
    let str = "";
      
    for (let i = 0; str.length < m * t; i++) {
      str += i.toString(n).toUpperCase();
    }
    let answer = "";
    let cnt = 0;
  
    while (answer.length < t) {
      let s = str.substring(cnt, cnt + m);
      answer += s[p - 1];
  
      cnt += m;
    }
    return answer;
  }