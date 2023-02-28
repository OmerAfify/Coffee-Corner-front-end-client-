import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ErrorNotfoundComponent } from './error-notfound/error-notfound.component';
import { ErrorServerErrorComponent } from './error-server-error/error-server-error.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './Interceptors/Error/error.interceptor';

@NgModule({
  declarations: [NavBarComponent,ErrorNotfoundComponent, ErrorServerErrorComponent],
  providers:[{provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true}],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'NotFound',component:ErrorNotfoundComponent},
      {path:'ServerError',component:ErrorServerErrorComponent}]
      )
  
  ],
  exports:[NavBarComponent, RouterModule]
})
export class COREModule { }
