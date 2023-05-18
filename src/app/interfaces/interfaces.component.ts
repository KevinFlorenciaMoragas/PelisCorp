import { Component } from '@angular/core';

@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.css']
})
export class InterfacesComponent {

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

export interface User { 
  id: number;
  username: string; 
  email: string; 
  password: string; 
  avatar: string; 
  role: string; 
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
}

export interface Actor { 
  id: number; 
  name: string; 
  lastName: string; 
  photo: string; 
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
}