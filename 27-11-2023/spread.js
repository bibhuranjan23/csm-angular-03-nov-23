var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var firstObj = { id: 1, name: "firstObj" };
var secondObj = __assign({}, firstObj);
console.log("secondObj : ".concat(JSON.stringify(secondObj)));
var emailObj = { email: " abc@example.com " };
var obj3 = __assign(__assign({}, firstObj), emailObj);
console.log("obj3 = ".concat(JSON.stringify(obj3)));
var obj1 = {
    id: 100,
    title: "Title1"
};
var obj2 = {
    id: 105,
    description: "description of the object"
};
var obj4 = __assign(__assign({}, obj1), obj2);
console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj2));
console.log(JSON.stringify(obj4));
var tuple1;
tuple1 = ["test", 50];
tuple1 = [""];
console.log(tuple1[0]);
console.log(tuple1[1]);
var str = tuple1[0], num = tuple1[1];
console.log(str);
console.log(num);
var tupleRest;
tupleRest = [1];
console.log(tupleRest[0]);
tupleRest = [1, "string1"];
console.log(tupleRest[0]);
console.log(tupleRest[1]);
tupleRest = [1, "string1", "string2", "string1", "string2"];
console.log(tupleRest[0]);
console.log(tupleRest[1]);
console.log(tupleRest[2]);
var employee = {
    id: 100,
    name1: "Alok",
    email: "example@gmail.com"
};
// let {id,name1,email}=employee;
// console.log(id);
// console.log(name1);
// console.log(email);
var x = employee.id, y = employee.name1, z = employee.email;
console.log(x);
console.log(y);
console.log(z);
