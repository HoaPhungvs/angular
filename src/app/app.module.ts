import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

import { ProductManagesPageComponent } from './page/admin/product-manages-page/product-manages-page.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { SignupComponent } from './page/signup/signup.component';
import { SigninComponent } from './page/signin/signin.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './page/contact/contact.component';

import { SeachBoxPipe } from './seach-box.pipe';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    HomePageComponent,
    AboutPageComponent,
    ProductPageComponent,
    NotFoundComponent,
    ProductManagesPageComponent,
    ListProductsComponent,
    SignupComponent,
    SigninComponent,
    AboutComponent,
    ContactComponent,
    SeachBoxPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
