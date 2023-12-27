import { Component,ChangeDetectionStrategy, Input,  OnInit  } from '@angular/core';
import { Customer } from '../customer';
@Component({
  selector: 'app-child',
  changeDetection:ChangeDetectionStrategy.Default,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() message :string =''
 
  customer:Customer = new Customer()
 
 
constructor() {
    console.log("  ChildComponent:Contructed");
  }
 
  ngOnChanges() {
    console.log("  ChildComponent:ngOnChanges");
  }
 
  ngOnInit() {
    console.log("  ChildComponent:ngOnInit");
  }
 
  ngDoCheck() {
    console.log("  ChildComponent:DoCheck");
  }
 
  ngAfterContentInit() {
    console.log("  ChildComponent:ngAfterContentInit");
  }
 
  ngAfterContentChecked() {
    console.log("  ChildComponent:AfterContentChecked");
  }
 
  ngAfterViewInit() {
    console.log("  ChildComponent:AfterViewInit");
  }
 
  ngAfterViewChecked() {
    console.log("  ChildComponent:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("  ChildComponent:ngOnDestroy");
  }
}
