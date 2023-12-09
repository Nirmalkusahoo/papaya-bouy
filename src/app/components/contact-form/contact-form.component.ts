import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators,} from '@angular/forms';
import {HttpService} from '../../modules/shared-module/services/http.service';
import {HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormValidatorService} from '../../modules/shared-module/services/form-validator.service';

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
    public formValidatorService: FormValidatorService,
    public httpService: HttpService,
    private matSnackBar: MatSnackBar
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
    this.formValidatorService.markFormGroupAsTouched(this.form);
    // Email configuration done at
    // https://formspree.io/forms/mvonlngy/integration
    if (this.form.valid) {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.httpService.postData('https://formspree.io/f/mvonlngy',
        {name: this.name.value, replyto: this.email.value, message: this.message.value},
        headers).subscribe(
        response => {
          if (response.ok === true) {
            this.matSnackBar.open('Thank you for reaching, will get back to you to in next 24hr', 'X', {
              duration: 5000
            });
          }
        }
      );
    }
  }

}
