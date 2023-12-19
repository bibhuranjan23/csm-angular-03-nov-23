import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  Counter = 5;

  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(count);
  }

  
}
