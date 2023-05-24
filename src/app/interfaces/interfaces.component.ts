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
  poster: Poster[];
  trailer: string;
  favorites: Favorites[];
  director: Director[];
  actors: Actor[];
  genre: Genre[];
  awards: Awards[];
  reviews: Reviews[];
  screenwritter: Screenwritter[];
  banner: string;
}
//2
export interface Favorites {
  id: number;
  id_movie: number;
  id_user: number;
}
export interface Poster {
  id: number;
  url: string;
}
//3
export interface User { 
  id: number;
  username: string; 
  email: string; 
  password: string; 
  avatar: string; 
  role: string; 
}
//4
export interface Genre {
  id: number;
  genre: string;
}
//5

//6
export interface Actor {
  id: number;
  name: string;
  lastName: string;
  photo: string;
}
//7
export interface Awards{
  id: number;
  name:string;
  festival:string;
}

//14
export interface Reviews{
  id: number;
  text: string;
  averageScore: number;
  user: User[];
}

//17
export interface Screenwritter{
  id: number;
  name: string;
  lastName: string;
  photo: string;
}

export interface Movies { 
  id: number; 
  movieName: string; 
  releaseDate: Date; 
  plot: string; 
  duration: number; 
  income: number; 
  score: number; 
  poster: Poster[]; 
  trailer: string; 
  favorites: Favorites[]; 
  director: Director[]; 
  actors: Actor[]; 
  genre: Genre[]; 
  awards: Awards[]; 
  reviews: Reviews[]; 
  screenwritter: Screenwritter[]; 
}

export interface Favorites { 
  id: number; 
  id_movie: number; 
  id_user: number; 
}

export interface Poster { 
  id: number; 
  url: string; 
}


export interface Genre { 
  id: number; 
  genre: string; 
}

export interface Director { 
  id: number; 
  name: string; 
  lastName: string; 
  photo: string; 
  biography: string;
  birthPlace: string;
  birthDate: number;
}

export interface Actor { 
  id: number; 
  name: string; 
  lastName: string; 
  photo: string; 
  biography: string;
  birthPlace: string;
  birthDate: number;
}

export interface Awards{ 
  id: number; 
  name:string; 
  festival:string; 
}

export interface Reviews{ 
  id: number; 
  text: string; 
  averageScore: number; 
  user: User[]; 
}

export interface Screenwritter{ 
  id: number; 
  name: string; 
  lastName: string; 
  photo: string; 
  biography: string;
  birthPlace: string;
  birthDate: number;
}

