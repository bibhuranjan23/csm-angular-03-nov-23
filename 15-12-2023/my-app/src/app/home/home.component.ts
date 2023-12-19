import { Component,Input,OnChanges, SimpleChanges, SimpleChange   } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges {
  @Input() count :number = 0 ;
  @Input() name :string ="";
  @Input('paper') book ={
       title:'C Programming',
       price:'400'
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    for (let property in changes) {
        if (property === 'count') {
          console.log('Previous:', changes[property].previousValue);
          console.log('Current:', changes[property].currentValue);
          console.log('firstChange:', changes[property].firstChange);
        } 
    }
}

}
