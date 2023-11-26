function solution(arr, queries) {
    for(let k=0 ;k < queries.length ;k++){
        let i = queries[k][0];
        let j = queries[k][1];
        
        let tem = arr[i];
        arr[i] = arr[j];
        arr[j] = tem;
    }
    return arr;
}