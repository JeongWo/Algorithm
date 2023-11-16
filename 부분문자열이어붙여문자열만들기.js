function solution(my_strings, parts) {
    var answer = '';
    for(let i=0;i<my_strings.length;i++){
        let [start,end] = parts[i];
        let substring = my_strings[i].substring(start, end +1);
        answer += substring;
    }
    return answer;
}