function solution(a, d, included) {
    var sum = 0;
    for (var i = 0; i < included.length; i++) {
        if (included[i]) {
            var term = a + i * d;
            sum += term;
        }
    }
    return sum;
}