import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { PrincipalComponent } from './principal/principal/principal.component';
import { FilmsComponent } from './list/films/films.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Service } from './services/service.service';

import { InterfacesComponent } from './interfaces/interfaces.component';
import { FilmViewComponent } from './film-view/film-view.component';
import { ProfileComponent } from './user/profile/profile.component';
import { PrivacyComponent } from './privacy/privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    PrincipalComponent,
    FilmsComponent,
    FilmViewComponent,
    InterfacesComponent,
    FooterComponent,
    ProfileComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
