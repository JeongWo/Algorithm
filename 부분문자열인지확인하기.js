function isSubstring(str, target) {
    for (let i = 0; i <= str.length - target.length; i++) {
        let j;
        for (j = 0; j < target.length; j++) {
            if (str[i + j] !== target[j]) {
                break;
            }
        }
        if (j === target.length) {
            return true;
        }
    }
    return false;
}

function solution(my_string, target) {
    return isSubstring(my_string, target) ? 1 : 0;
}