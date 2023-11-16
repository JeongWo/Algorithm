function solution(arr, delete_list) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        let d = false;
        for (let j = 0; j < delete_list.length; j++) {
            if (arr[i] === delete_list[j]) {
                d = true;
                break;
            }
        }
        if (!d) {
            answer.push(arr[i]);
        }
    }
    return answer;
}