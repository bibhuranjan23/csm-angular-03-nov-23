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
  
  classToApply :string ='italicClass boldClass';
  IsBold:boolean = false;
  IsItalic:boolean = true;
  txtColor:boolean=true;
  AddCSSClasses(){
     let obj ={
      boldClass :this.IsBold,
      italicClass:this.IsItalic,
      txtColor:this.txtColor
     }
     return obj;
  }
  clicked :string="Not Clicked"
  show(){
    this.clicked="Now Button Clicked"
  }
  data:any="sample"

  
//  firstName :string = "Rajib";
//  name :string="<h1>dshghdghdgshdsf</h1>"
//  lastName :any="Kumar";
//  salary :number=50000;
//  IsDisabledClick:boolean=false;
//  MaliciousData : string = "Hello <script>alert('your application is hacked')</script>";

//  getFullName(){
//      return this.firstName +' '+this.lastName;
//  }

//  img:string ="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=";

//  localImg:string="../assets/images/1.jpg";
}


