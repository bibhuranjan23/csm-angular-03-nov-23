import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  @Input() count :number = 0 ;
  @Output()
  countChanged: EventEmitter<number> =   new EventEmitter();

  Increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
 Decrement() {
    this.count--;
    this.countChanged.emit(this.count);
 }


}
