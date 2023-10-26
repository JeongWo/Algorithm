function solution(my_string, n) {
    if (n >= my_string.length) {
        return my_string; 
    } else {
        return my_string.slice(-n); 
    }
}