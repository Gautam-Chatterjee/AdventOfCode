const stream = require('./extract.js');

let arr = stream.data


//part 1 and 2 solution
setTimeout(function(){
    let c = 0;
    let idx =1;
 for(let i = 2; i<arr.length;i=i+2){
       if(arr[i].charAt(idx)==='#'){
           idx=(idx+1)%arr[i].length
           c++;
           continue;
       }
       else{
        idx=(idx+1)%arr[i].length
          continue; 
       }    
 }
 console.log(c)
},150)

