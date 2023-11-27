 
 function sum(x:number ,y :number=0,z:number=0){
     return x+y;
 }

 console.log(sum(4,5));
 console.log(sum(4));


 function testArguments(...args: (string[] | number[])) {
    for (let i in args) {
      // Log each argument in the format `args[i] = argument_value`
      console.log(`args[${i}] = ${args[i]}`);
    }
  }
  // Call the `testArguments` function with different arguements
testArguments("1");
testArguments(10, 20);


function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any) {
  return a + b;
}

add("first", "second");
add(1, 2);
//add(true, false);

  