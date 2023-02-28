import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from 'src/app/core/Services/account.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {


  constructor(private accountService : AccountService, private router: Router){

  }
  

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):Observable<boolean>{
   
    return this.accountService.accountObservable$.pipe(
      map(user=>{ 
if(user!=null)
        return true;
else {
       this.router.navigate(["/Account/Login"],{queryParams:{ returnUrl:state.url }})
        return false;
      }
      })
      
      )
    
 
  }
  
}
