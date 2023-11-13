const arr = [10,20,30,40,50];

let sum = arr.reduce(function(x,y)
    {
         return x+y;
    },0);

console.log(sum);
console.log(typeof sum);


const arr2 =['',[1,2],[3,4],[4,5]] ;

const flatArray = arr2.reduce(function(prev,curr){
        return prev.concat(curr);
},[]);

console.log(flatArray);

let max = arr.reduce((max,val)=>max < val ? val : max ,0);

console.log(max);