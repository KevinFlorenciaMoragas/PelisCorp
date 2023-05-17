import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { PrincipalComponent } from './principal/principal/principal.component';
import { FilmsComponent } from './list/films/films.component';
import { SeriesComponent } from './list/series/series.component';
import { FilmViewComponent } from './film-view/film-view.component';
import { ConditionsComponent } from './conditions/conditions/conditions.component';
import { PrivacyComponent } from './privacy/privacy/privacy.component';
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

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'login/register', component: RegisterComponent},
  {path: 'register', component: RegisterComponent},
  {path:'footer', component: FooterComponent},
  {path:'header', component: HeaderComponent},
  {path:'principal', component: PrincipalComponent},
  {path: 'films', component: FilmsComponent },
  {path: 'series', component: SeriesComponent },
  {path:'carousel', component: PrincipalComponent},
  {path:'principal/film-view/:id', component: FilmViewComponent},
  {path:'conditions', component: ConditionsComponent},
  {path:'privacy', component: PrivacyComponent},
  {path:'admin', component: AdminComponent},
  {path:'admin/movies', component: MoviesComponent},
  {path:'admin/users', component: UsersComponent},
  {path:'admin/actors', component: ActorsComponent},
  {path:'admin/awards', component: AwardsComponent},
  {path:'admin/directors', component: DirectorsComponent},
  {path: 'update/movie/:id', component: UpdateMovieComponent},
  {path: 'update/actor/:id', component: UpdateActorsComponent},
  {path: 'update/director/:id', component: UpdateDirectorComponent},
  {path: 'update/award/:id', component: UpdateAwardComponent},
  {path: '', redirectTo: '/principal', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
