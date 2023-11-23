console.log("Welcome to TypeScript");
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
var num;
num = 23;
var name1;
var status1;
var arr;
arr = [10, 20, 30];
console.log(typeof arr);
var sum = function (n1, n2) {
    var res;
    if (typeof n1 === 'number' && typeof n2 == 'number') {
        res = n1 + n2;
    }
    if (typeof n1 === 'string' && typeof n2 == 'string') {
        res = n1 + n2;
    }
    return res;
};
console.log(sum(10, 20));
console.log(sum(10.5, 20.0));
console.log(sum("Hello", " World"));
//console.log(sum("10","20"));
/*
*/ 
