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
import { MoviesByDirectorComponent } from './list/movies-by-director/movies-by-director.component';
import { MoviesByActorComponent } from './list/movies-by-actor/movies-by-actor.component';
import { MoviesByScreenwritterComponent } from './list/movies-by-screenwritter/movies-by-screenwritter.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent,canActivate: [AuthGuard], data: { role: [ 'ADMIN'] } },
  { path: 'register', component: RegisterComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'carousel', component: PrincipalComponent },
  { path: 'film-view/:id', component: FilmViewComponent },
  { path: 'movies-by-director/:id', component: MoviesByDirectorComponent },
  { path: 'movies-by-genre/:id', component: MoviesByGenreComponent },
  //{ path: 'movies-by-movie-name/:id', component: MoviesByMovieNameComponent },
  { path: 'movie-by-movie-name/:movieName', component: MoviesByMovieNameComponent },
  { path: 'movies-by-genre/film-view/:id', component: FilmViewComponent },
  { path: 'movies-by-actor/:id', component: MoviesByActorComponent },
  { path: 'movies-by-screenwritter/:id', component: MoviesByScreenwritterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'conditions', component: ConditionsComponent },
  { path: '', component:PrincipalComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
