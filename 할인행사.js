function solution(want, number, discount) {
	let dic = [];
	let answer = 0;
	for (let i = 0; i < want.length; i++) dic[want[i]] = number[i];
	for (let i = 0; i <= discount.length - 10; i++) {
		if (!want.includes(discount[i])) continue;
		let tmp = discount.slice(i, i + 10);
		if (tmp.filter((el) => !want.includes(el)).length) continue;
		let check = true;
		for (let i = 0; i < want.length; i++) {
			if (dic[want[i]] !== tmp.filter((el) => el === want[i]).length) {
				check = false;
				break;
			}
		}
		if (check) answer++;
	}
	return answer;
}