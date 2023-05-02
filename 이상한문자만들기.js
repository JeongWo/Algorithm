function solution(s) {
    let answer = '';
    let word = s.split(' ');
    
    for (let i = 0; i < word.length; i++) {
        for(let j = 0; j < word[i].length; j++) {
            if(j % 2 === 0) {
                answer += word[i][j].toUpperCase();
            } else {
                answer += word[i][j].toLowerCase();
            }
        }
        if (i < word.length -1) {
            answer += ' ';
        }
    }
    return answer;
}