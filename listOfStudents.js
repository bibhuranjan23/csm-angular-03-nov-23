

const students =[
    { name:"Rahul",email:"rahul@example.com",phone :"8989898989"},
    { name:"Bajib",email:"rajib@example.com",phone :"8989898989"},
    { name:"Rakul",email:"rakul@example.com",phone :"8989898989"}
];

//Create a new array which will contain only names 

const names = students.map(function(obj){
       return obj.name;
});

const newStudents = students.map(function(obj,i){
      return {id:i+1,name:obj.name,email:obj.email,country:"india",phone:obj.phone,class:"X"}
});

console.log(newStudents);

