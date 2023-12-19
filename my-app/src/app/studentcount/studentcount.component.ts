import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-studentcount',
  templateUrl: './studentcount.component.html',
  styleUrls: ['./studentcount.component.css']
})
export class StudentcountComponent {
  // all: number = 5;
  // male: number = 3;
  // female: number = 2;
  @Input()
  all: number=0;
  @Input()
  male: number=0;
  @Input()
  female: number=0;

  selectedRadioButtonValue: string = 'All';

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> =
      new EventEmitter<string>();
  
  onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged
            .emit(this.selectedRadioButtonValue);
    }
}
