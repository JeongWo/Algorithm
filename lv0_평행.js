function solution(dots) {
    if (calculSlope(dots[0], dots[1]) === calculSlope(dots[2], dots[3]))
        return 1;
    if (calculSlope(dots[0], dots[2]) === calculSlope(dots[1], dots[3]))
        return 1;
    if (calculSlope(dots[0], dots[3]) === calculSlope(dots[1], dots[2]))
        return 1;
    
    return 0;
}
function calculSlope(arr1, arr2) {
    return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0] );
}