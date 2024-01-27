import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewProductComponent } from './components/pages/new-product/new-product.component';
import { ProductFormComponent } from './components/product-form/product-form.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    NewProductComponent,
    ProductFormComponent,
   
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule, //colocado
    HttpClientModule //colocado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
