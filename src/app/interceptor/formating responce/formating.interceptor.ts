import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, delay, filter, map } from 'rxjs';

@Injectable()
export class FormatingInterceptor implements HttpInterceptor {

  constructor() {}

// NOTE
// interCepter thi api na responce ma formating kari sakay che...example ma api na responce mathi avta data mathi 
// first 5 j data lidha che and jya prn aa api ('users') use kareli hase tya badhe first 5 j data madse 
   

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      filter(event => event instanceof HttpResponse && request.url.includes('users')),
      // delay(3000)
      // map((event:any):any=> event.clone({body: event.body.filter((val:any)=>val.id <= 5)}))
    )
  }
}
