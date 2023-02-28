import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';


const routes: Routes = [
{path:'',component:HomePageComponent},
//{path:"Shop", loadChildren:()=>import('./Shop/shop.module').then(m=>m.ShopModule)},
{path:"Account", loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)}
//{path:'**',redirectTo:"/",pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
