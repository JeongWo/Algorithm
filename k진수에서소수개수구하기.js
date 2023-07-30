function solution(n, k) {
    let answer = [];
    
    while(n > 0){
        answer.unshift(n % k);
        n = Math.floor(n / k);
    }
    let convertNum = answer.join("").split('0');
    let count = 0;
    
    for(let i = 0; i < convertNum.length; i++){
        let num = Number(convertNum[i]);
        
        if(convertNum[i] === '') continue;
        if(isPrime(num)) count++;
    }
    return count;
}

const isPrime = (num) => {
    if(num <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}