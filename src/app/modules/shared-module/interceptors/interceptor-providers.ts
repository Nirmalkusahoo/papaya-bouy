import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {TokenInterceptor} from './token-interceptor.service';

export const INTERCEPTOR_PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
];
