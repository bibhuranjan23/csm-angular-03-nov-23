let index: number = 0;
if (index == 0) {
  let index: number = 2;
  console.log(`index = ${index}`);
}
console.log(`index = ${index}`);

let orderStatus:(boolean | string | number) ;
orderStatus = true;
orderStatus ="true";
type NumberOrString = number|string ;

function sum(n1:NumberOrString , n2:NumberOrString):NumberOrString{
    let res :any;
    if(typeof n1 ==="number"&& typeof n2==="number")
    {
        res = n1+n2;
    }
    if(typeof n1 ==="string"&& typeof n2==="string")
    {
        res = n1+n2;
    }

    return res;
    
}

console.log(sum(4,5)); //9
console.log(sum("4","5"));//45

enum OrderStutus{
    PENDING,
    PROCESSED,
    DELIVERED,
    COMPLETED
}


let sts:any = OrderStutus.PROCESSED;
console.log(sts);
switch(sts){
    case  OrderStutus.PENDING:
        console.log('PENDING');
        break;
    case  OrderStutus.PROCESSED:
        console.log('PROCESSED');
        break;
    case  OrderStutus.DELIVERED:
        console.log('DELIVERED');
        break;
    case  OrderStutus.COMPLETED:
        console.log('COMPLETED');
        break;

}

const add =(n1:NumberOrString , n2:NumberOrString):NumberOrString =>{
    let res :any;
    if(typeof n1 ==="number"&& typeof n2==="number")
    {
        res = n1+n2;
    }
    if(typeof n1 ==="string"&& typeof n2==="string")
    {
        res = n1+n2;
    }

    return res;
    
}
