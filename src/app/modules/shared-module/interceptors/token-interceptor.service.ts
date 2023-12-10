import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenService} from '../services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {
  }

  /* eslint-disable @typescript-eslint/no-explicit-any*/
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    /* eslint-enable @typescript-eslint/no-explicit-any*/
    let modifiedRequest = request;

    // If router/location url contains context=staging then modify HttpRequest
    if (this.tokenService.getAccessToken()) {
      modifiedRequest = request.clone({
        setHeaders: {Authorization: `Bearer ${this.tokenService.getAccessToken()}`}
      });
    }

    return next.handle(modifiedRequest);
  }

}

