function solution(n)
{
    var answer = 0;
    var str = n.toString();
    var str_split = str.split('');
​
    for(var i=0; i<str_split.length; i++){
        answer += parseInt(str_split[i]);
    }
​
    return answer;
}