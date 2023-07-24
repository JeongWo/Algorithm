function solution(str1, str2) {
    let answer = 0;
    let arr1 = []; 
    let arr2 = []; 
    let re = /^[a-zA-Z]+$/;  // 정규식 영문자
    
    for(let i=0; i<str1.length-1; i++){ 
     let substr = str1.slice(i,i+2).toLowerCase() 
     if(re.test(substr)){ 
         arr1.push(substr)
     }
 }
    
    for(let i=0; i<str2.length-1; i++){  
     let substr = str2.slice(i,i+2).toLowerCase()
     if(re.test(substr)){
         arr2.push(substr)
     }
 }
    
    let union = [] 
    let intersect = []  
    
    for(let i=0; i<arr2.length; i++){ 
        if(arr1.indexOf(arr2[i]) >= 0){   
            intersect.push(arr1.splice(arr1.indexOf(arr2[i]),1))  
        }
        union.push(arr2[i])  
    }
    for(let i=0; i<arr1.length; i++){  
        union.push(arr1[i])
    }
    if(union.length === 0) answer = 65536
    else{
       answer = Math.floor((intersect.length/union.length) * 65536)
    }
    return answer; 
}