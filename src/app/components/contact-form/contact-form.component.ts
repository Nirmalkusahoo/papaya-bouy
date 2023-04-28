import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators,} from '@angular/forms';
import {FormValidatorService} from '../../services/form-validator.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  public form: UntypedFormGroup;
  public name: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  public email: UntypedFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ]);
  public subject: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  public message: UntypedFormControl = new UntypedFormControl('', [Validators.required]);

  constructor(
    private formBuilder: UntypedFormBuilder,
    public formValidatorService: FormValidatorService
  ) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.formValidatorService.markAsTouched(this.form);
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
