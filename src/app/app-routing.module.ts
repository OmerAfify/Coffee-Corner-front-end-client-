import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorNotfoundComponent } from './Pages-Components/error-notfound/error-notfound.component';
import { ErrorServerErrorComponent } from './Pages-Components/error-server-error/error-server-error.component';
import { HomePageComponent } from './Pages-Components/home-page/home-page.component';
import { ProductDetailsComponent } from './Pages-Components/product-details/product-details.component';
import { ShopPageComponent } from './Pages-Components/shop-page/shop-page.component';

const routes: Routes = [
{path:'',component:HomePageComponent},
{path:'Shop',component:ShopPageComponent},
{path:'Shop/:id',component:ProductDetailsComponent},
{path:'NotFound',component:ErrorNotfoundComponent},
{path:'ServerError',component:ErrorServerErrorComponent},
{path:'**',redirectTo:"/",pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
