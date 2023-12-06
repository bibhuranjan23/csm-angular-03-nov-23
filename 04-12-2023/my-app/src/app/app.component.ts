import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: '<h1>{{title}}</h1>',
  templateUrl:'./app.component.html',
  styles:[`p{color:blue;font-size:20px}`,
          `h1{color:red}`,
          `.d1{width:500px;}`
        ],
  styleUrls:['./app.component.css',
            '../assets/css/mystyle.css'
            ],
})
export class AppComponent {
  title = 'Welcome to Angular';
  style1 :string ='c3';
  style2=['c4','c5'];
}
