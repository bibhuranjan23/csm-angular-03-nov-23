import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

    students =[
      {
         id :'std101',
         name:'Pranaya',
         gender:'Male',
         dob:'08/12/1986',
         fee:1234
      },
      {
        id :'std102',
        name:'Anurag',
        gender:'Male',
        dob:'08/12/1986',
        fee:1234
      }
      ,
      {
        id :'std103',
        name:'Priyanka',
        gender:'Female',
        dob:'08/12/1986',
        fee:1234
      },
      {
        id :'std104',
        name:'Hina',
        gender:'Female',
        dob:'08/12/1986',
        fee:1234
      },
      {
        id :'std105',
        name:'Sambit',
        gender:'Male',
        dob:'08/12/1986',
        fee:1234
      },
      {
        id :'std106',
        name:'ALok',
        gender:'Male',
        dob:'08/12/1986',
        fee:1234
      }
    ]

    getAllStudent(){
       return this.students.length;
    }

    getMaleStudents(){
        return this.students.filter(s=>s.gender==='Male').length;
    }

    getFemaleStudents(){
      return this.students.filter(s=>s.gender==='Female').length;
  }
}
