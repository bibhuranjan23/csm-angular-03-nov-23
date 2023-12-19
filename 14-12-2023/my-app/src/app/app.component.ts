import { Component } from '@angular/core';
import { defaultUrlMatcher } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls:[
              './app.component.css',
            
            ],
})
export class AppComponent {
  isValid:boolean = false;
  num:number=105
  day:string ="mon"
  changeValue(){
     this.isValid = !this.isValid;
  }
  countryName ="NA"
  ChangeCountry(e:any){
   this.countryName = e.target.value;
  }
  bgcolor ="pink";
  mystyle = {'width':'300px', 'height':'200px'}



  students: any[];

  constructor() {
      this.students = [
          {
              ID: 'std101', FirstName: 'Santosh', LastName: 'Jena', Branch: 'CSE',
              DOB: '29/02/1988', Gender: 'Male'
          },
          {
              ID: 'std102', FirstName: 'Anurag', LastName: 'Mohanty', Branch: 'ETC',
              DOB: '23/05/1989', Gender: 'Male'
          },
          {
              ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
              DOB: '24/07/1992', Gender: 'Female'
          },
          {
            ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
            DOB: '24/07/1992', Gender: 'Female'
        },
        {
          ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
          DOB: '24/07/1992', Gender: 'Female'
      },
      {
        ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
        DOB: '24/07/1992', Gender: 'Female'
    },
    {
      ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
      DOB: '24/07/1992', Gender: 'Female'
  },
  {
    ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
    DOB: '24/07/1992', Gender: 'Female'
},
{
  ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
  DOB: '24/07/1992', Gender: 'Female'
},
{
  ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
  DOB: '24/07/1992', Gender: 'Female'
},
{
  ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
  DOB: '24/07/1992', Gender: 'Female'
},
{
  ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
  DOB: '24/07/1992', Gender: 'Female'
},
{
  ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
  DOB: '24/07/1992', Gender: 'Female'
},
{
  ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
  DOB: '24/07/1992', Gender: 'Female'
},
{
  ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
  DOB: '24/07/1992', Gender: 'Female'
},
{
  ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
  DOB: '24/07/1992', Gender: 'Female'
},
{
  ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
  DOB: '24/07/1992', Gender: 'Female'
},
{
  ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
  DOB: '24/07/1992', Gender: 'Female'
},
{
  ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
  DOB: '24/07/1992', Gender: 'Female'
},
{
  ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
  DOB: '24/07/1992', Gender: 'Female'
},
{
  ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
  DOB: '24/07/1992', Gender: 'Female'
},  
{
  ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
  DOB: '24/07/1992', Gender: 'Female'
},
      ];
  }

  trackByMethod(index:number, el:any): number {
    return el.id;
  }
}


