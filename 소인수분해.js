function solution(n) {
  let ans = [];
  let num = n;
  for (let i = 2; i <= num; i++) {
      if (isPrime(i) && Number.isInteger(num / i)) {
          ans.push(i);
          num /= i;
      }
  }
  return ans;
}

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
  }
  return true;
}