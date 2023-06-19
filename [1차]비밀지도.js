function solution(n, arr1, arr2) {
    let answer = [];
    let nArr1 = [];
    let nArr2 = [];
    
    for (let x of arr1) {
        let tempArr = [];
        x = x.toString(2);
        
        for(let i = 0;i < n-x.length;i++) {
            tempArr.push(0); 
    }
    tempArr.push(x);
    nArr1.push(tempArr.join(''));
    console.log(nArr1);
}
    
    for (let x of arr2) {
        let tempArr = [];
        x = x.toString(2);
        
        for(let i=0;i<n-x.length;i++) {
            tempArr.push(0);
        }
        tempArr.push(x);
        nArr2.push(tempArr.join(''));
        console.log(nArr2);
    }
    
    for (let i = 0;i<n;i++) {
        let str = '';
        for(let j=0;j<n;j++) {
            if(nArr1[i][j] === '0' && nArr2[i][j] === '0') {
                str+= ' ';
            } else str += '#';
        }
        answer.push(str);
    }
    console.log(answer);
    return answer;
}