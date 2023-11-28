interface IUser{
    id?:number,
    name?:string,
    
}
const user1:IUser = {
};

const user2 = {
    id:2,
    name:"Rajib"
}

const user3 = {
    id:3,
    name:"Rahul"
}

let  users :IUser[];


users = [
    user1,
    user2,
    user3,
];

let  users2 :IUser[];


function printUser(user:IUser):void
{
     console.log(user.id);
     console.log(user.name);
}

printUser(user1);

