class Employee
{
     private readonly _id : number
     private _name:string
     private _email:string
     static count :number=0;
     get id():number{
        return this._id;
     }
     get name():string{
        return this._name;
     }

     set name(name:string){
        this._name = name;
     }

     get email():string{
        return this._email;
     }

     set email(email:string){
        this._email = email;
     }
    constructor(id:number,name:string,email:string)
    {
        this._id =id;
        this.name = name;
        this.email= email;
        
    }

    public get():void
    {
         console.log(`id:${this.id}`);
         console.log(`name:${this.name}`);
         console.log(`email:${this.email}`);
    }

    static updateCout()
    {
        Employee.count++;
    }
}

let  emp1 = new Employee(100,"Alok","alok@gmail.com");
Employee.updateCout();
let  emp2 = new Employee(101,"Asish","asish@gmail.com");
Employee.updateCout();
console.log(`count=${Employee.count}`);
emp1.name ="Rahul";
emp1.get();
emp2.get();