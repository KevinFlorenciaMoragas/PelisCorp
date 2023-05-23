import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from 'src/app/interfaces/interfaces.component';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  constructor(private http: MoviesService) { }
  id: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(100)]);
  duration: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(20)]);
  income: FormControl = new FormControl('',  [Validators.minLength(1), Validators.maxLength(20)]);
  movie_name: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(100)]);
  release_date: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(10)]);
  plot: FormControl = new FormControl('', [Validators.minLength(10), Validators.maxLength(8000)]);
  score: FormControl = new FormControl('',  [Validators.minLength(1), Validators.maxLength(3)]);
  trailer: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(200)]);

  MyNewForm: FormGroup = new FormGroup({
  id: this.id,
  duration: this.duration,
  income: this.income,
  movie_name: this.movie_name,
  release_date: this.release_date,
  plot: this.plot,
  score: this.score,
  trailer: this.trailer
  });
  Clic(datos: FormGroup) {
    console.log(datos.value);
  }
  movies: Movies[] = []
  movie: Movies = {
    id: 0,
    movieName: '',
    releaseDate: new Date(),
    plot: '',
    duration: 0,
    income: 0,
    score: 0,
    poster: [],
    trailer: '',
    favorites: [],
    director: [],
    actors: [],
    genre: [],
    awards: [],
    reviews: [],
    screenwritter: [],
    banner: ''
  }

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

  deleteMovie(id: number) {
    this.http.deleteMovieById(id).subscribe(
      data => {
        console.log(data);
        this.getAllMovies();
      },
      error => {
        console.log("Error al eliminar el actor", error);
        // Manejar el error de eliminación de actor
      }
    );
  }
  Create(id: number) {

  }
}
