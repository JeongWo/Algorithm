function solution(str_list, ex) {
    let answer = '';
    for (let i = 0; i < str_list.length; i++) {
        let currentStr = str_list[i];
        let excluded = false;
        for (let j = 0; j <= currentStr.length - ex.length; j++) {
            let isEqual = true;
            for (let k = 0; k < ex.length; k++) {
                if (currentStr[j + k] !== ex[k]) {
                    isEqual = false;
                    break;
                }
            }
            if (isEqual) {
                excluded = true;
                break;
            }
        }
        if (!excluded) {
            answer += currentStr;
        }
    }
    return answer;
}