var objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
};
function printNestedObject(obj) {
    console.log("obj.nestedProperty.name = " + obj.nestedProperty.name);
}
function printNestedObject1(obj) {
    // Check if the input object is defined
    if (obj != undefined
        && obj.nestedProperty != undefined
        && obj.nestedProperty.name) {
        console.log("name = ".concat(obj.nestedProperty.name));
    }
    else {
        console.log("name not found or undefined");
    }
}
function printNestedOptionalChain(obj) {
    var _a;
    if ((_a = obj === null || obj === void 0 ? void 0 : obj.nestedProperty) === null || _a === void 0 ? void 0 : _a.name) {
        console.log("name = ".concat(obj.nestedProperty.name));
    }
    else {
        console.log("name not found or undefined");
    }
}
//printNestedObject({});
//printNestedObject1({});
//printNestedOptionalChain(objectA);
var val = 50;
var res = val !== null && val !== void 0 ? val : 'Val is null';
console.log(res);
var u = 5;
var aNumber2;
aNumber2 = u;
//aNumber2 = <number>u;
function alwaysThrows() {
    // Throw an error with a specified message
    throw new Error("this will always throw");
    // Return a value, but it will never be reached because of the thrown error
    return -1;
}
alwaysThrows();
