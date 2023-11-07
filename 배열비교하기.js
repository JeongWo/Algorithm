function solution(arr1, arr2) {
    if(arr1.length > arr2.length){
        return 1;
    }else if (arr1.length < arr2.length) {
        return -1;
    }else {
        let sum1 = 0;
        let sum2 = 0;

    for (let i = 0; i < arr1.length; i++) {
      sum1 += arr1[i];
      sum2 += arr2[i];
    }
        
        if(sum1>sum2) {
            return 1;
        } else if(sum1<sum2){
            return -1;
        }else{
            return 0;
        }
    }
}