
let num = "";
let num1:number ;
num1=12;
let num2 = [1,2,3,null,""];
let str : any;
str=10;
str="A";
str=true;

let x:number;
x = str ;
console.log(x);

type Book = {
    id :number ,
    name:string,
    author:string
}

let book1 : Book;

book1 = {
    id :10 ,
    name:"CP",
    author:"KK"
} ;

let book2 : any ;
book2 = {
    id :10 ,
    name:"CP",
    author:"KK"
} ;

book1 = book2;

let str1 : string;

str1 = <any>10;
str1 = 12 as any;

