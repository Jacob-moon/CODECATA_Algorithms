const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line',function(){
    rl.close();
});

rl.on('close', function () {
    const special = "!@#$%^&*(\\'\"<>?:;";
    console.log(special);
});