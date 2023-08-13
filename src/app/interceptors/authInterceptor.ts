import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the token from local storage
    const authToken = localStorage.getItem('authToken');

    // Clone the request and add the token to the headers
    if (authToken) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: authToken,
        },
      });
      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}
