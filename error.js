var add = function(a,b) {
     if(typeof a !== 'number'|| typeof b !=='number'){
         throw {
             name: 'TypeError',
             message:'add needs numbers'
         };
     }
     return a + b;
}
console.log(add);