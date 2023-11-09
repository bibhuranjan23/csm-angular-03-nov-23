const arr= [10,20,30];

const arr1 =[];

// for(let i=0;i<arr.length;i++){

// arr1.push(Math.pow(arr[i],2));
// }

for(let item of arr)
{
    arr1.push(Math.pow(item,2));
}

console.log(arr);
console.log(arr1);

const arr3 = arr.map(
    function(n){
        return n * n;
    }
);


console.log("arr2:"+arr3);

const arr4 = arr.map((n)=> n * n);
console.log(arr4);

const radius = [5,4,5,6];

const area = radius.map(function(r){
      return Math.PI * r * r;
});

console.log(area);
