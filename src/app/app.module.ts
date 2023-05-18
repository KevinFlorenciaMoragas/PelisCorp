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
import { AdminComponent } from './admin/admin/admin.component';
import { MoviesComponent } from './admin/movies/movies.component';
import { ActorsComponent } from './admin/actors/actors.component';
import { DirectorsComponent } from './admin/directors/directors.component';
import { AwardsComponent } from './admin/awards/awards.component';
import { UsersComponent } from './admin/users/users.component';
import { UpdateMovieComponent } from './admin/update-movie/update-movie.component';
import { UpdateActorsComponent } from './admin/update-actors/update-actors.component';
import { UpdateDirectorComponent } from './admin/update-director/update-director.component';
import { UpdateAwardComponent } from './admin/update-award/update-award.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';

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
    AdminComponent,
    MoviesComponent,
    UpdateMovieComponent,
    UpdateActorsComponent,
    UpdateDirectorComponent,
    UpdateAwardComponent,
    UsersComponent,
    DirectorsComponent,
    ActorsComponent,
    AwardsComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CarouselModule.forRoot()

  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
