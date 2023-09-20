import { Directive, Input, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDisableControl]'
})
export class DisableControlDirective {

  constructor (
    @Self() private ngControl: NgControl
  ) {}

  @Input() set appDisableControl( condition: boolean ){
    condition
    ? this.ngControl.control?.disable()
    : this.ngControl.control?.enable();
  }

}
