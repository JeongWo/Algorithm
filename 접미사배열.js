function solution(my_string) {
    var suffixes = new Array(my_string.length);
    for (let i = 0; i < my_string.length; i++) {
        suffixes[i] = suffixFromIndex(my_string, i);
    }
    suffixes = customSort(suffixes);
    return suffixes;
}

function suffixFromIndex(str, index) {
    var suffix = '';
    for (let i = index; i < str.length; i++) {
        suffix += str[i];
    }
    return suffix;
}

function customSort(arr) {
    var len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}