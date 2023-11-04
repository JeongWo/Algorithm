function solution(num_list) {
    let length = num_list.length;
    if (length < 2) {
        return num_list;
    }

    let lastElement = num_list[length - 1];
    let secondLastElement = num_list[length - 2];

    if (lastElement > secondLastElement) {
        return [...num_list, lastElement - secondLastElement];
    } else {
        return [...num_list, lastElement * 2];
    }
}