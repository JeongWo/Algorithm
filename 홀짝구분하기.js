const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', function (line) {
    input = parseInt(line);
    const result = solution(input); 
    console.log(result); 
    rl.close(); 
});

function solution(n) {
    return n % 2 === 0 ? `${n} is even` : `${n} is odd`;
}