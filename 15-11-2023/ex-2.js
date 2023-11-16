function message(text){
    let count =10;
     return function(){
        console.log(text);
        console.log(count);
     }
}


const test = message("Hello");

test();