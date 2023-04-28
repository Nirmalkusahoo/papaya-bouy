import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidatorService {
  constructor() {}

  public markAsTouched(formGroup: UntypedFormGroup): void {
    // tslint:disable-next-line:forin
    for (const control in formGroup.controls) {
      formGroup.get(control).markAsTouched();
    }
  }
}
