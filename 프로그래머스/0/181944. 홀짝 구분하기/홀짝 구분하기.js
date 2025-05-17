const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    const even = n % 2 === 0;
    function check(n) {
        if (even) {
             console.log(`${n} is even`)
        } else {
             console.log(`${n} is odd`)
        }
    }
return check(n);
});