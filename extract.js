const readline = require('readline');
const fs = require('fs');
const readInterface = readline.createInterface({
    input: fs.createReadStream('./day4.txt'),
    output: process.stdout,
    console: false
});
let arr = []
readInterface.on('line', function(line) {
    arr.push(line)
});

module.exports = {data: arr}


