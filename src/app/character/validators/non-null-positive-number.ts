import {AbstractControl, ValidatorFn} from '@angular/forms';

export const nonNullPositiveNumber = () : ValidatorFn | null => {
  return (control : AbstractControl) => {
    if(!control.value)
      return null;

    if(control.value > 0) {
      return null;
    }

    return {nonNullPositiveNumber: true}


  }
}
