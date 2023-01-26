import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import {catchError} from 'rxjs/operators'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router:Router ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   return next.handle(request).pipe( 
catchError( error=>{
if(error){
  if(error.status===404)
  this.router.navigate(['/NotFound'])

  if(error.status===500)
  this.router.navigate(['/ServerError'])
}

return throwError(error);
} ));

}
}
