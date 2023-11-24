var index = 0;
if (index == 0) {
    var index_1 = 2;
    console.log("index = ".concat(index_1));
}
console.log("index = ".concat(index));
var orderStatus;
orderStatus = true;
orderStatus = "true";
function sum(n1, n2) {
    var res;
    if (typeof n1 === "number" && typeof n2 === "number") {
        res = n1 + n2;
    }
    if (typeof n1 === "string" && typeof n2 === "string") {
        res = n1 + n2;
    }
    return res;
}
console.log(sum(4, 5)); //9
console.log(sum("4", "5")); //45
var OrderStutus;
(function (OrderStutus) {
    OrderStutus[OrderStutus["PENDING"] = 0] = "PENDING";
    OrderStutus[OrderStutus["PROCESSED"] = 1] = "PROCESSED";
    OrderStutus[OrderStutus["DELIVERED"] = 2] = "DELIVERED";
    OrderStutus[OrderStutus["COMPLETED"] = 3] = "COMPLETED";
})(OrderStutus || (OrderStutus = {}));
var sts = OrderStutus.PROCESSED;
console.log(sts);
switch (sts) {
    case OrderStutus.PENDING:
        console.log('PENDING');
        break;
    case OrderStutus.PROCESSED:
        console.log('PROCESSED');
        break;
    case OrderStutus.DELIVERED:
        console.log('DELIVERED');
        break;
    case OrderStutus.COMPLETED:
        console.log('COMPLETED');
        break;
}
