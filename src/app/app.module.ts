import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
=======
import { HeaderComponent } from './header/header/header.component';
import { BodyComponent } from './body/body/body.component';

import { FooterComponent } from './footer/footer/footer.component';
import { PrincipalComponent } from './Principal/principal/principal.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Service } from './services/service.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PrincipalComponent,
    RegisterComponent,
    LoginComponent,

>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
