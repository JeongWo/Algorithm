function solution(n, m) {
    var answer = [];
    
    const g = (a, b) => {  
        if (b === 0) return a   
        return g(b, a % b)  
    }
    
    const l = (a,b) => (a*b) / g(a,b)
    return [g(n,m), l(n,m)]
}