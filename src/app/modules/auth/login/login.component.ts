import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared-module/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LoginModel} from './login.model';
import {HttpService} from '../../shared-module/services/http.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public email: FormControl = new FormControl('', [Validators.required]);
  public password: FormControl = new FormControl('', [Validators.required]);
  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private matSnackBar: MatSnackBar, public httpService: HttpService, private http: HttpClient,public router: Router,) {
    this.initFormGroup();
  }

  ngOnInit(): void {
  }

  public initFormGroup(): void {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
  }

  public onSubmit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
        this.userService.login(this.getLoginData()).subscribe(
          (data) => {
            this.showSnackBarMessage('Logged in successfully');
            this.router.navigate(['/about']);
          },
          (error) => {
          }
        );
    }
  }

  private getLoginData(): any {
    const loginData: LoginModel = new LoginModel();
    loginData.userName = this.email.value;
    loginData.password = this.password.value;
    return loginData;
  }

  private showSnackBarMessage(snackBarMessage: string): void {
    this.matSnackBar.open(snackBarMessage, '', {
      duration: 2000,
    });
  }
}
