function solution(my_string, is_sprefix) {
    return my_string.length > is_sprefix.length ? 0 :
    is_sprefix === my_string.sobstring(0,is_sprefix.length) ? 1 : 0;
}