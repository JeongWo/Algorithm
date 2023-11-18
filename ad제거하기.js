function solution(strArr) {
    var answer = [];
    var idx = 0;
    for(let i=0; i < strArr.length; i++) {
        let str = strArr[i];
        let hasAd = false;
        for(let j = 0 ;j<=str.length-2;j++) {
            if(str[j] === 'a' && str[j+1] === 'd') {
                hasAd = true;
                break;
            }
            }
        if(!hasAd) {
            answer[idx] = str;
            idx++;
                }   
            }
    return answer;
}