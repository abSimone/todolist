import { Directive, ElementRef, Input } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Directive({
  selector: '[appUrgentTask]'
})
export class UrgentTaskDirective {

  @Input() appUrgentTask! : boolean;

  constructor(private el: ElementRef) { 
    console.log(this.appUrgentTask);
    
    if(this.appUrgentTask){
      el.nativeElement.style.backgroundColor = "blanchedalmond"
    }
  }


}
