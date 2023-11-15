function solution(strArr) {
    var answer = [];
    
    for (let i = 0; i < strArr.length; i++) {
        let convert = '';
        
        for (let j = 0; j < strArr[i].length; j++) {
            let charCode = strArr[i].charCodeAt(j);
            
            if (i % 2 !== 0) {
                if (charCode >= 97 && charCode <= 122) {
                    charCode -= 32;
                }
            } else {
                if (charCode >= 65 && charCode <= 90) {
                    charCode += 32;
                }
            }
            convert += String.fromCharCode(charCode);
        }
        answer[i] = convert;
    }
    return answer;
}