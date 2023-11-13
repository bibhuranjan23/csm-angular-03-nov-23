let people = [
    { name: 'Matt', age: 25 },
    { name: 'Asma ', age: 23 },
    { name: 'Cami ', age: 29 },
    { name: 'Alok', age: 23}
  ];

let result = people.reduce(function(prev,obj){
             let key = obj['age'];
             if (!prev[key]) {
                prev[key] = []
              }
              prev[key].push(obj)
              return prev;        
    },{});

console.log(result);


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});
console.log( fruitCount);


const arr5 =[1,2,3,4,5,6,7,8,9,10];
//Find sum of all even numbers

const res = arr5.filter((ele)=> ele%2==0);

console.log(res);

console.log(Array.isArray(res))