import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, delay, finalize, retry, throwError } from 'rxjs';

@Injectable()
export class SuperAdminInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const hardcodedToken = '1d38d128-0671-4121-8084-f6332a992a40';
    const requestwfAuth = request.clone({
      setHeaders: {
        Authorization: `Bearer ${hardcodedToken}`
      }
    });
    return next.handle(requestwfAuth).pipe(
      // delay(2000),
      //retry on failure
      retry(2),

      //handle errors
      catchError((varError:HttpErrorResponse) => {
        //error handling logic
        alert(`HTTP Error: ${request.url}`)
        return throwError(varError);
      }),

      //profiling
      finalize(()=>{
        const profileMsg = `${request.method} "${request.urlWithParams}"`
        // console.log(profileMsg);
      })
    );
  }
}
