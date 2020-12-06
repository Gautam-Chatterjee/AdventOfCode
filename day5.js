const stream = require('./extract.js');

let arr = stream.data

setTimeout(function(){
 console.log(arr[0])
},150)