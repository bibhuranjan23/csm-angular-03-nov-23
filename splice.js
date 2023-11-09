const arr = [10,20,30,40];
console.log(arr);
arr.splice(0,0,[1,2,3]);
console.log(arr);//[1,2,3,10,20,30,40]

arr.splice(0,3,5);
console.log(arr); //[5,10,20,30,40]

arr.splice(2,1);
console.log(arr);//[5,10,30,40]

const arr1 =['A','B'];
const arr2 =['C','D'];
const arr3 = arr1.concat(arr2);
console.log(arr3);