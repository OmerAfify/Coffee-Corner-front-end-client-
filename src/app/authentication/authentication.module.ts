import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SHAREDModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes = [{path:'Login',component:LoginComponent},
{path:'Register',component:RegisterComponent}]


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SHAREDModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthenticationModule { }
