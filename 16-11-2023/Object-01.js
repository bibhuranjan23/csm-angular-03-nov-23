const Person = {};

const Person1 = {
      fname : "Alok",
      lname : "Kumar",
      email: "alok@gmail.com",
      name : function(){
         return this.fname+' '+this.lname;
      }
};

const Person2 = {
    fname : "Alok",
    lname : "Kumar",
    email: "alok@gmail.com",
    name : function(){
       return this.fname+' '+this.lname;
    }
};

const Person3 = {
    fname : "Alok",
    lname : "Kumar",
    email: "alok@gmail.com",
    name : function(){
       return this.fname+' '+this.lname;
    }
};

function Employee(fname,lname,email){
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    // this.fullName  = function(){
    //      return this.fname + ' '+this.lname; 
    // }
}
Employee.prototype.fullName =function(){
         return this.fname + ' '+this.lname; 
}

console.log(Person1);
console.log(Person1.name());
const employee1 = new Employee('Alok','Kumar','alok@example.com');
const employee2 = new Employee('Alok','Kumar','alok@example.com');
const employee3 = new Employee('Alok','Kumar','alok@example.com');
const employee4 = new Employee('Alok','Kumar','alok@example.com');
employee4.show = function(){
    return this.fname + ' '+this.lname; 
}
console.log(typeof employee1);
console.log(employee1);
console.log(employee1.fname);
console.log(employee1.fullName());
console.log(employee1.toString());
console.log(employee4.show());