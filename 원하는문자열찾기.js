function solution(myString, pat) {
    for(let i=0;i<=myString.length-pat.length;i++){
        let  match = true;
        for(let j=0;j<pat.length;j++){
            if (myString[i+j].toLowerCase() !== pat[j].toLowerCase()
               ){
                match = false;
                break;
            }
        }
        if (match) {
            return 1;
            }
        }
             return 0;
 }