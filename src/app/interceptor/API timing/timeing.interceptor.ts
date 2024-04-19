import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class TimeingInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if (request.url.includes('https://jsonplaceholder.typicode.com/users')) {
      
      const start = new Date().getSeconds()
      return next.handle(request).pipe(
        finalize(() => {

          const endtime = new Date().getSeconds()
          const final = endtime - start
          // console.log(final);
        })
      )
    }
    return next.handle(request)
  }
}
