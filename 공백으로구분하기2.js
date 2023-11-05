function solution(my_string) {
    let words = [];
    let current = '';

    for (let i = 0; i < my_string.length; i++) {
        const char = my_string[i];
        if (char !== ' ') {
            current += char;
        } else if (current !== '') {
            words.push(current);
            current = '';
        }
    }

    if (current !== '') {
        words.push(current);
    }

    return words;
}