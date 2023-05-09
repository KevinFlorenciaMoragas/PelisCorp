import { Component } from '@angular/core';

@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.css']
})
export class InterfacesComponent {

}
export interface Credentials {
  username: string;
  password: string;
}
export interface Movies {
  id: number;
  movieName: string;
  releaseDate: Date;
  plot: string;
  duration: number;
  income: number;
  score: number;
  photo: string;
  favorites: Favorites[];
  director: MovieDirector[];
  actors: MovieActor[];
  genres: MovieGenre[];
  awards: MovieAwards[];
  reviews: MovieReview[];
  screenwritters: MovieScreenwritter[];
}
//2
export interface Favorites {
  id: number;
  id_movie: number;
  id_user: number;
}
//3
export interface User {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  photo: string;
  userRol: number;
}
//4
export interface Genre {
  id: number;
  genre: string;
}
//5
export interface Director {
  id: number;
  name: string;
  lastName: string;
  photo: string;
  movies: MovieDirector[];
}
//6
export interface Actor {
  id: number;
  name: string;
  lastName: string;
  photo: string;
  movies: MovieActor[];
  awards: ActorAward[];
}
//7
export interface Awards{
  id: number;
  name:string;
  festival:string;
  movies: MovieAwards[];
  actors: ActorAward[];
}
//8
export interface MovieGenre{
  id: number;
  id_movie: number;
  id_genre: number;
}
//9
export interface MovieDirector{
  id: number;
  id_movie: number;
  id_director: number;
}
//10
export interface MovieActor{
  id: number;
  id_movie: number;
  id_actor: number;
}
//11
export interface MovieAwards{
  id: number;
  id_movie: number;
  id_awards: number;
  date: Date;
  nomineeWinner: string;
}
//12
export interface ActorAward{
  id: number;
  id_actor: number;
  id_awards: number;
  date: Date;
  nomineeWinner: string;
}
//13
export interface DirectorAward{
  id: number;
  id_director: number;
  id_awards: number;
  date: Date;
  nomineeWinner: string;
}
//14
export interface Reviews{
  id: number;
  text: string;
  averageScore: number;
}
//15
export interface MovieReview{
  id: number;
  id_movie: number;
  id_review: number;
}
//16
export interface UserReview{
  id: number;
  id_user: number;
  id_review: number;
} 
//17
export interface Screenwritter{
  id: number;
  name: string;
  lastName: string;
  photo: string;
  movies: MovieScreenwritter[];
}
//18
export interface MovieScreenwritter{
  id: number;
  id_movie: number;
  id_screenwritter: number;
}