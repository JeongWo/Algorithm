function solution(n, m, sections) {
    var answer = 0;
    var paint = 0;
    for(var section of sections) {
        if(paint < section) {
            answer++;
            paint = section + m - 1;
        }
    }
    return answer;
}