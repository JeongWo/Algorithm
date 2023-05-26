function solution(nums){
    let answer = 0;
    for(let i = 0; i< nums.length-2; i++){
        for(let j = i+1; j < nums.length-1; j++){
            for(let k = j+1; k < nums.length; k++){
                 let sums = nums[i]+nums[j]+nums[k];
                if(isPrime(sums))
                    answer += 1;
                }
            }
        }
    return answer;
    }
function isPrime(num){
        for(let j = 2; j <= Math.sqrt(num); j++){
            if(num % j === 0)
                return false;
        }
        return true;
}