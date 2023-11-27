var objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
}
function printNestedObject(obj) {
    console.log("obj.nestedProperty.name = " + obj.nestedProperty.name);
}

function printNestedObject1( obj: any) {
    // Check if the input object is defined
    if (obj != undefined
    && obj.nestedProperty != undefined
    && obj.nestedProperty.name) {
      console.log(`name = ${obj.nestedProperty.name}`)
    } else {
      console.log(`name not found or undefined`);
    }
  }
  
  function printNestedOptionalChain( obj: any) {
    if (obj?.nestedProperty?.name) {
        console.log(`name = ${obj.nestedProperty.name}`)
      } else {
        console.log(`name not found or undefined`);
      }
    }
    
//printNestedObject({});

//printNestedObject1({});

//printNestedOptionalChain(objectA);


let val = 50;

let res = val ?? 'Val is null' ;

console.log(res);

let u: unknown = 5;
let aNumber2: number;
aNumber2 = <number>u;
//aNumber2 = <number>u;

function alwaysThrows() : never{
    // Throw an error with a specified message
    throw new Error("this will always throw");
  
    // Return a value, but it will never be reached because of the thrown error
    return -1;
}

  alwaysThrows();

  