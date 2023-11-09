function sum(a,b){  //
      return a+b;
}

function callSum(fn,x,y){  // HigherOrder Function
     return fn(x,y);
}

let result=callSum(sum,4,5);
console.log(result);




function callSum1(x,y){  // HigherOrder Function
    return sum(x,y);
}
let result1=callSum1(4,5);
console.log(result1);



function callSum2(x,y){  // HigherOrder Function
    return function(){
        return x+y;
    };
}




let result2=callSum2(4,5);
console.log("Type of result2"+typeof result2);
console.log(result2());