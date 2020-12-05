const stream = require('./extract.js');

let arr = stream.data

//part 1
setTimeout(function(){ 
    for(let i =0; i < arr.length;++i){
        for(let j =i+1; j < arr.length;++j){
           if(arr[i]+arr[j]===2020){console.log(arr[i]*arr[j])}
        }
    }
}, 100);

//part2
setTimeout(function(){ 
    for(let i =0; i < arr.length;++i){
        for(let j =i+1; j < arr.length;++j){
            for(let k =j+1; k <arr.length;++k){
           if(arr[i]+arr[j]+arr[k]===2020){console.log(arr[i]*arr[j]*arr[k]);return;}
            }
        }
    }
}, 100);

