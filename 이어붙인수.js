function solution(num_list) {
    let oddSum = [];
    let evenSum = [];

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 !== 0) {
            oddSum += num_list[i];
        } else if(num_list[i] % 2 == 0){
            evenSum += num_list[i];
        }
    }
    return parseInt(oddSum) + parseInt(evenSum);
}