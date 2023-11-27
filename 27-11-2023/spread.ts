var firstObj = { id: 1, name: "firstObj" };

var secondObj = { ...firstObj };

console.log(`secondObj : ${JSON.stringify(secondObj)}`);

let emailObj: object = { email : " abc@example.com " };

let obj3 = { ... firstObj, ...emailObj };

console.log(`obj3 = ${JSON.stringify(obj3)}`);

let obj1 ={
     id:100,
     title:"Title1"
}
let obj2 ={
    id:105,
    description:"description of the object"
}

let obj4 = {...obj1,...obj2};
console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj2));
console.log(JSON.stringify(obj4));

let tuple1 : [string ,number?] ;

tuple1 =["test",50];
tuple1 =[""];
console.log(tuple1[0]);
console.log(tuple1[1]);

let [str,num] = tuple1;
console.log(str);
console.log(num);


let tupleRest: [number, ...string[]];
tupleRest = [1];
console.log(tupleRest[0]);
tupleRest = [1, "string1"];
console.log(tupleRest[0]);
console.log(tupleRest[1]);

tupleRest = [1, "string1", "string2","string1", "string2"];
console.log(tupleRest[0]);
console.log(tupleRest[1]);
console.log(tupleRest[2]);

let employee ={
    id:100,
    name1:"Alok",
    email: "example@gmail.com"
};

// let {id,name1,email}=employee;
// console.log(id);
// console.log(name1);
// console.log(email);


let {id:x,name1:y,email:z}=employee;
console.log(x);
console.log(y);
console.log(z);