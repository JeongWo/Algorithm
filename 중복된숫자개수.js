function solution(array, n) {
  let answer = 0;
  answer = array.filter((x) => x === n).length;
  return answer;
}
