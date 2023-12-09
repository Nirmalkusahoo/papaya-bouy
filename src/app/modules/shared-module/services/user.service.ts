import {Injectable} from '@angular/core';
import {ValidateUserModel, SignUpModel} from '../models/sign-up.model';
import {environment} from '../../../../environments/environment';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    public httpService: HttpService,
    private tokenService: TokenService
  ) {
  }


  public login(logInData: ValidateUserModel): Observable<any> {
    const url: string = environment.baseUrl + environment.login;
    return this.httpService.postData(url, logInData).pipe(
      map((response) => {
        if (response.token) {
          this.tokenService.setAccessToken(response.token);
        }
      })
    );
  }


}
