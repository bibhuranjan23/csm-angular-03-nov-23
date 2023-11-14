function sum(p1,p2){
    
    return p1+p2;
}
function Addition(n1,n2){
    return sum(n1,n2);
}

function multiplication(n1,n2){
    return function(){
        return n1 * n2;
    };
}


const add = sum;

console.log(add(4,5));
console.log(sum(40,50));
console.log(Addition(10,20));
const mul = multiplication(12,3);
console.log(mul());

const fn=function(){
   console.log("A");
 };

 fn();

 const test = function(){
    return 50;
  };
 
 console.log(test());

 const div  = function (n1=0,n2=2){
      return n1/n2;
 }

 console.log(div(4,2));
 console.log(div());
 console.log(div(30));
