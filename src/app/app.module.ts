import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
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
