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
import { ComunityComponent } from './comunity/comunity.component';
import { AdminComponent } from './admin/admin/admin.component';
import { MoviesComponent } from './admin/movies/movies.component';
import { UsersComponent } from './admin/users/users.component';
import { ActorsComponent } from './admin/actors/actors.component';
import { AwardsComponent } from './admin/awards/awards.component';
import { DirectorsComponent } from './admin/directors/directors.component';
import { UpdateMovieComponent } from './admin/update-movie/update-movie.component';
import { UpdateActorsComponent } from './admin/update-actors/update-actors.component';
import { UpdateDirectorComponent } from './admin/update-director/update-director.component';
import { UpdateAwardComponent } from './admin/update-award/update-award.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'comunity', component: ComunityComponent },
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
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'admin/movies', component: MoviesComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'admin/users', component: UsersComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'admin/actors', component: ActorsComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'admin/awards', component: AwardsComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'admin/directors', component: DirectorsComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'update/movie/:id', component: UpdateMovieComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'update/actor/:id', component: UpdateActorsComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'update/director/:id', component: UpdateDirectorComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'update/award/:id', component: UpdateAwardComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'update/user/:id', component: UpdateUserComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: '', component: PrincipalComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
