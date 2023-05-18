import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { PrincipalComponent } from './principal/principal/principal.component';
import { FilmsComponent } from './list/films/films.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FilmViewComponent } from './film-view/film-view.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { SeriesComponent } from './list/series/series.component'; 
import { MoviesByGenreComponent } from './list/movies-by-genre/movies-by-genre.component';
import { MoviesByMovieNameComponent } from './list/movies-by-movie-name/movies-by-movie-name.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComunityComponent } from './comunity/comunity.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/register', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'films', component: FilmsComponent },
  {path:'series', component: SeriesComponent},
  { path: 'carousel', component: PrincipalComponent },
  { path: 'principal/film-view/:id', component: FilmViewComponent },
  { path: 'films/film-view/:id', component: FilmViewComponent },
  { path: 'films/movies-by-genre/:id', component: MoviesByGenreComponent },
  { path: 'films/movies-by-movie-name/:id', component: MoviesByMovieNameComponent },
  { path: 'movies-by-genre/:id/film-view/:id', component: MoviesByGenreComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'conditions', component: ConditionsComponent },
  { path: 'comunity', component: ComunityComponent },
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'pageNotFound', redirectTo: '/PageNotFoundComponent', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
