console.log(`Welcome to TypeScript`);

class Person{
    firstName:string
    lastName:string
    constructor(firstName:string,lastName:string){
          this.firstName = firstName;
          this.lastName = lastName;
    }

    getFullName() {
         return this.firstName+' '+this.lastName;
    } 
}

let num:number;
num =23;
let name1:string;
let status1 : boolean;

let arr:[number,number,number] ;
arr =[10,20,30]
console.log(typeof arr);


const sum = (n1:number|string,n2:number|string):number|string=>{
    let res:any;
    if(typeof n1 ==='number' && typeof n2 =='number')
    {
        res = n1+n2;
    }
    if(typeof n1 ==='string' && typeof n2 =='string')
    {
        res = n1+n2;
    }
    return res;
}

console.log(sum(10,20));
console.log(sum(10.5,20.0));
console.log(sum("Hello"," World"));
//console.log(sum("10","20"));
/*
*/