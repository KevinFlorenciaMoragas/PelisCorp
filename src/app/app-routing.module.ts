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
  {path: '', redirectTo: '/principal', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
