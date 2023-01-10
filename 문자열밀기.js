function solution(A, B) {
    // 1. 처음부터 A와 B가 같다면 문자열을 한 번도 밀지 않은 경우이므로 0을 반환한다.
    if(A===B) return 0;

    let total = 0;
    let arr = A.split("");
    
    for (let i = arr.length-1; i >= 0; i-- ){
        // 2. A의 마지막 문자를 잘라서 tmp에 넣는다.
        let tmp = arr.splice(arr.length-1, 1)[0]
        
        // 3. tmp를 arr의 맨 앞쪽에 추가한다. (unshift() 사용)
        arr.unshift(tmp);
        
        // 4. 문자열을 한 번 밀었으므로 total 값을 증가시킨다.
        total++
        
        // 5. 문자열을 민 값이 B와 일치한다면 민 횟수(total)를 반환한다.
        if(arr.join("") === B) return total;
    }
    return -1;
}