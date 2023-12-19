import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  count = 15;

  mybook ={
    title:'C++',
    price:'500'
  }
  Increment(){
     this.count++;
  }
  Decrement(){
    this.count--;
  }
}
