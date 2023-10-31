function solution(num_list) {
    return num_list.findIndex(num => num < 0) >= 0 ? 
        num_list.findIndex(num => num < 0) :
        -1;
}
