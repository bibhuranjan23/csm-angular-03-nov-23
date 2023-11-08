// const arr = [10,20,30,"A"] ;
// const arr1 = new Array(3,2,3);
// console.log(arr);

// console.log(typeof arr);

// console.log(arr.length);

// arr[99]=90;

// console.log(arr.length);
// console.log(arr[10]);
// console.log(arr1.length);
// console.log(arr1[2]);

// const arr2 =[10,30,40];
// console.log(arr2);
// delete arr2[1];
// console.log(arr2);

const arr = [10,20,30,40,50,60,70];
console.log(arr[0]);
console.log(arr[1]);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for(i in arr)
{
    console.log(arr[i]);
}

for(i of arr)
{
    console.log(i);
}


arr.forEach( function(e){
    console.log(e)
});
