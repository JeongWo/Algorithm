function solution(n) {
  let ni = 1;
  for (let i = 1; i <= n; i++) {
    ni *= i;
    if (ni === n) {
      return i;
    }
    if (ni > n) {
      return i - 1;
    }
  }
}
