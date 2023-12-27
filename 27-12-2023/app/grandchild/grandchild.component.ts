import { ChangeDetectionStrategy, Component, Input,  OnInit } from '@angular/core';
import { Customer } from '../customer';
@Component({
  selector: 'app-grandchild',
  changeDetection:ChangeDetectionStrategy.Default,
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent {
  @Input() 
  customer : Customer ={code :'',name:''}
  
  constructor() {
    console.log("    GrandChildComponent:Contructed");
  }
 
  ngOnChanges() {
    console.log("    GrandChildComponent:ngOnChanges");
  }
 
  ngOnInit() {
    console.log("    GrandChildComponent:ngOnInit");
  }
 
 
  ngDoCheck() {
    console.log("    GrandChildComponent:DoCheck");
  }
 
  ngAfterContentInit() {
    console.log("    GrandChildComponent:ngAfterContentInit");
  }
 
  ngAfterContentChecked() {
    console.log("    GrandChildComponent:AfterContentChecked");
  }
 
  ngAfterViewInit() {
    console.log("    GrandChildComponent:AfterViewInit");
  }
 
  ngAfterViewChecked() {
    console.log("    GrandChildComponent:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("    GrandChildComponent:ngOnDestroy");
  }
 
}
