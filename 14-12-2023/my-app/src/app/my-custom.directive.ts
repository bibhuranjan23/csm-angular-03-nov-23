import { Directive,ElementRef , Input } from '@angular/core';

@Directive({
  selector: '[appMyCustom]'
})
export class MyCustomDirective {
  @Input() color: string ="";
  constructor(private el: ElementRef) {
    //el.nativeElement.style.backgroundColor = this.color;
  }
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }


}
