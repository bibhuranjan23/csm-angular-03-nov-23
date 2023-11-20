function greeting(message) 
{ 
    function test(name){ 
        return message + ' ' + name; 
    } 
    function test1(name){ 
        return message + ' ' + name; 
    } 
   return {test,test1};
} 
let sayHi = greeting('Hi'); 
let sayHello = greeting('Hello'); console.log(sayHi.test('John')); console.log(sayHello('John')); 
