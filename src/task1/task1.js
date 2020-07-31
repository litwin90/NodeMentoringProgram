const readline = require('readline');

function reverseString(string) {
    return string.split('').reverse().join('');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

rl.on('line', (input) => {
    if (input) {
        console.log(reverseString(input));
    }
});
