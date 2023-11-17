import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


import { ProductPageComponent } from './page/product-page/product-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductManagesPageComponent } from './page/admin/product-manages-page/product-manages-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SignupComponent } from './page/signup/signup.component';
import { ContactComponent } from './page/contact/contact.component';
import { SigninComponent } from './page/signin/signin.component';

const routes: Routes = [
  {
    path:'',component:BaseLayoutComponent,children:[
    {path:"",component:HomePageComponent},
    {path:"about",component:AboutPageComponent},
    {path:"product",component:ProductPageComponent},
    {path:"contact",component:ContactComponent},
    {path:"signup",component:SignupComponent},
    {path:"signin",component:SigninComponent}
    
  ]
},
{
  path:"admin",component:AdminLayoutComponent,children:[
    {path:"",redirectTo:"dashboard",pathMatch:"full"},
    {
      path:"dashboard",component:DashboardComponent
    },
    {
      path:"product",component:ProductManagesPageComponent
    },
    {path:"product/add",component:ProductFormComponent},
    {path:"product/:id/edit",component:ProductFormComponent}
  ]
},
{path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
