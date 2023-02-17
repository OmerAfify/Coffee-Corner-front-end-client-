import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from 'src/app/shared/Services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorServerMessages : string[] = null;

  loginForm = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null, [Validators.required, 
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
  })

  constructor(private accountService:AccountService, private router:Router) { }

  ngOnInit(): void {

  }

onlogin(){
  this.accountService.login(this.loginForm.value).subscribe(
    ()=>{this.router.navigateByUrl("/Shop")},
   error=>{ 
    console.log(error);
    this.errorServerMessages = error.error.errors}
    );
}



ValidateField(field:any){
  return this.accountService.ValidateField(field);
}


EmailValidMessage(email:any){
if(email.value==="" || email.value===null || email.value===undefined )
 return "email field is required.";

if(email.invalid)
return "please enter a valid email."; 

}



PasswordValidMessage(password:any){
  if(password.value==="" ||password.value===null ||password.value===undefined )
   return "password field is required.";
  
  if(password.invalid)
  return "password must have atleast 8 characters, one uppercase, one lowercase, one number and one special character."; 

  }
  


}
