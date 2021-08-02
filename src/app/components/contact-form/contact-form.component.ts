import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormValidatorService } from '../../services/form-validator.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  public form: FormGroup;
  public name: FormControl = new FormControl('', [Validators.required]);
  public email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  public subject: FormControl = new FormControl('', [Validators.required]);
  public message: FormControl = new FormControl('', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    public formValidatorService: FormValidatorService
  ) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
    });
  }

  ngOnInit(): void {}

  public onSubmit(): void {
    this.formValidatorService.markAsTouched(this.form);
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
