function solution(num_list) {
    return num_list.length < 5 ?
           num_list.sort((a,b)=> a-b) : 
           num_list.sort((a,b)=> a-b).slice(0,5);
}