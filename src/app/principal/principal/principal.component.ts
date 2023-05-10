import { Component } from '@angular/core';

import { Movies } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { OnInit } from '@angular/core';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{

  constructor(private http: MoviesService) { }

  // firstImages = [
  //   { url: 'https://via.placeholder.com/200x300/ff0000', alt: 'Imagen 1' },
  //   { url: 'https://via.placeholder.com/200x300/00ff00', alt: 'Imagen 2' },
  //   { url: 'https://via.placeholder.com/200x300/0000ff', alt: 'Imagen 3' },
  //   { url: 'https://via.placeholder.com/200x300/ffff00', alt: 'Imagen 4' },
  //   { url: 'https://via.placeholder.com/200x300/ff00ff', alt: 'Imagen 5' },
  //   { url: 'https://via.placeholder.com/200x300/00ffff', alt: 'Imagen 6' },
  //   { url: 'https://via.placeholder.com/200x300/ff0000', alt: 'Imagen 7' },
  //   { url: 'https://via.placeholder.com/200x300/00ff00', alt: 'Imagen 8' },
  //   { url: 'https://via.placeholder.com/200x300/0000ff', alt: 'Imagen 9' },
  //   { url: 'https://via.placeholder.com/200x300/ffff00', alt: 'Imagen 10' },
  // ];

  // showFirstImages = true;

  movies: Movies[] = []

  ngOnInit(){
    this.getAllMovies()
  }
 
  getAllMovies() {
    this.http.listAllMovies().subscribe(data => {
      console.log(data)
      this.movies = data as Movies[]
      console.log(this.movies)
    })
  }

  obtenerDatos() {
    this.http.listAllMovies().subscribe((data: any[]) => {
      this.movies = data;
    });
  }

}
