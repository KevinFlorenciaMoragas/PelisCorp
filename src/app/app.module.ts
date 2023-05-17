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
import { Observable, from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Service } from './services/service.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { FilmViewComponent } from './film-view/film-view.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SeriesComponent } from './list/series/series.component';
import { MoviesByGenreComponent } from './list/movies-by-genre/movies-by-genre.component';
import { MoviesByMovieNameComponent } from './list/movies-by-movie-name/movies-by-movie-name.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesByGenreComponent,
    MoviesByMovieNameComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    PrincipalComponent,
    FilmsComponent,
    FilmViewComponent,
    InterfacesComponent,
    FooterComponent,
    AboutusComponent,
    PrivacyComponent,
    ConditionsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    YouTubePlayerModule,
    CarouselModule.forRoot()

  ],
  providers: [Service,
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
