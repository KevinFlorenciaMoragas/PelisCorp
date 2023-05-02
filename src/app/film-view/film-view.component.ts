import { Component } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { Genre } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent {
  constructor(private http: MoviesService) { }
  movies: Movies[] = []
  genres: Genre[] = []

  ngOnInit() {
    this.getAllMovies(),
    this.getAllGenres()
  }
  getAllMovies() {
    this.http.listAllMovies().subscribe(data => {
      console.log(data)
      this.movies = data as Movies[]
      console.log(this.movies)
    })
  }
  
  getAllGenres() {
    this.http.listAllGenres().subscribe(data => {
      console.log(data)
      this.genres = data as Genre[]
      console.log(this.genres)
    })
  }

  selectedOption = 1;
  result = '';

  selectOption(option: number) {
    switch (option) {
      case 1:
        this.result = 'Opción 1 seleccionada';
        break;
      case 2:
        this.result = 'Opción 2 seleccionada';
        break;
      case 3:
        this.result = 'Opción 3 seleccionada';
        break;
      default:
        this.result = 'Opción no válida';
        break;
    }
  }



}