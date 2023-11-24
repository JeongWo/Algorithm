function solution(intStrs, k, s, l) {
    var answer = [];
  
    for (var i = 0; i < intStrs.length; i++) {
        var currentStr = intStrs[i];
        var intValue = 0;

        var strIndex = s;
        var digitMultiplier = Math.pow(10, l - 1); 
        for (var j = 0; j < l; j++) {
            var digit = parseInt(currentStr[strIndex]);
            intValue += digit * digitMultiplier;
            digitMultiplier /= 10;
            strIndex++;
        }

        if (intValue > k) {
            answer[answer.length] = intValue;
        }
    }

    return answer;
}