import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _accountObservable = new ReplaySubject<User|null>(1);
  public accountObservable$ = this._accountObservable.asObservable();

  baseUrl = "https://localhost:44330/api/";
  
  constructor(private http:HttpClient, private route:Router) { }

loadCurrentUser(token:string | null){

  if(token === null){
    this._accountObservable.next(null);
    return of(null);
  }


let headers = new HttpHeaders();
headers = headers.set("Authorization",`Bearer ${token}`)
return this.http.get<User>(this.baseUrl+"GetCurrentUser",{headers} )
.pipe(map(user=>{ 
  if(user){
    this._accountObservable.next(user);
    localStorage.setItem("token",user.token);
    return user;
  }else{
    return null;
  }
 
}))


  }

  
  login(userData:any){
    return this.http.post<User>(this.baseUrl+"Login",userData).pipe(
      map( user => {
        localStorage.setItem('token', user.token);
        this._accountObservable.next(user);
      })
    )}


  register(userData:any){
    return this.http.post<User>(this.baseUrl+"Register",userData).pipe(map(user=>{
      this._accountObservable.next(user);
      localStorage.setItem("token",user.token);
    }))
  }

  logout(){
      localStorage.removeItem("token");
      this._accountObservable.next(null);
      this.route.navigateByUrl("/");
    }

    ValidateField(field:any){
      if(field.touched && field.invalid)
      return true;
    }
    
    


}
