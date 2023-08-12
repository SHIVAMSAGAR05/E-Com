import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { CartComponent } from './cart/cart.component';
import { SellerHomepageComponent } from './seller-homepage/seller-homepage.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { UpdatesellerproductComponent } from './updatesellerproduct/updatesellerproduct.component';
import { SearchComponent } from './search/search.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:"home"
  },
  {
    component:UserAuthComponent,
    path:"login"
  },
  //This route is for Seller SignUP
  {
    component:SellerAuthComponent,
    path:"seller"
  },
  {
    component:CartComponent,
    path:"cart"
  },
  //This route will be the seller's Home Page after logged in
  {
    component:SellerHomepageComponent,
    path:"seller-home",
    canActivate : [AuthGuard]
  },
  {
    component:SellerAddProductComponent,
    path:"seller-add-product",
    canActivate:[AuthGuard]
  },
  {
    component:UpdatesellerproductComponent,
    path:`seller-update-product/:id`,
    canActivate:[AuthGuard]
  },
  {
    component:SearchComponent,
    path:`search/:query`
  },
  {
    component:ProductdetailsComponent,
    path: 'details/:productId'
  },
  //Error Handling page 404
  // {
  //   component:ErrorPageComponent,
  //   path:"**"
  // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
