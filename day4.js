const stream = require('./extract.js');

let arr = stream.data

setTimeout(function(){
  let a =' ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm'
  console.log(validate(a))
    //console.log(combine(arr).filter(a=>validate(a)).length)
},150)




 function combine(a){
   let nArray = [];
   let str = '';
   for(let i =0; i < a.length;+i){
       if(a[i]===''){
         nArray.push(str);
         str = '';
         continue;
       }
       else{
           str = str + ' ' + a[i]
        }
   }
   return nArray
 }

 function validate(str){
     let pass = str.split(' ');
     if(pass.length-2 < 7){return false}
     for(let i = 1; i < str.length;++i){
         let s = str.charAt(i).substring(0,3)
         if(!['byr','iyr','eyr','hgt','hcl','pid','ecl'].includes(s)){return false}
     }
     return true;
 }

