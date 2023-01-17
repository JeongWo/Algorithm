function solution(order) {
  let nums = [];
  //입력값을 배열로 변환한다.
  do {
    nums.push(order % 10);
    order = Math.floor(order / 10);
  } while (order > 0);

  let result = nums.filter((num) => num !== 0 && num % 3 === 0).length;

  return result;
}
