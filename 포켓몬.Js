function solution(nums) {
    var answer = new Set(nums)
    var halfNumsLength = parseInt(nums.length / 2)
    return answer.size > halfNumsLength ? halfNumsLength : answer.size 
}