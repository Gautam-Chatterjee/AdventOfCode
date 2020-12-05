const stream = require('./extract.js');

let arr = stream.data

setTimeout(function(){
 console.log(arr.filter(line=>validate2(scan(line))).length)
},150)


//parses each line and returns an object which can then be used to validate the password
function scan(line){
  let ln = line.split(':')
  let str = ln[1].substring(1,ln[1].length)
  let  elem = ln[0].substring(ln[0].length-1,ln[0].length)
  let nLn = ln[0].split(' ')[0].split('-')
  let from = parseInt(nLn[0]);
  let to = parseInt(nLn[1]);
 return {from:from,to:to,elem:elem,string:str} 
}

//validates the correctness of the password for part 1
function validate(o){
    let c = 0;
  for(let i = 0; i<o.string.length;++i){
      if(o.string.charAt(i)===o.elem){c++;}
  }
  return c>=o.from && c<=o.to;
}

//validates the correctness of the password for part 2
function validate2(o){
    return xor(o.string.charAt(o.from-1)===o.elem,o.string.charAt(o.to-1)===o.elem)
}


//XOR implementation
function xor(b1,b2){
    if(b1 && b2){return false}
    if(!b1 && !b2){return false}
    else{return true}
}

