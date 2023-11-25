function solution(arr) {
    var answer = [];
    let indexStart = -1;
    let indexEnd = -1;
    for( let i = 0 ; i< arr.length ; i++) {
        if(arr[i]===2) {
            if(indexStart === -1) {
                indexStart = i;
            }
        indexEnd = i;
        }
    }
    if(indexStart === -1) {
        return[-1];
    }
    for(let i=indexStart;i<=indexEnd;i++){
        answer.push(arr[i]);
    }
    return answer;
}