import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder,FormArray } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies, MovieDTO } from 'src/app/interfaces/interfaces.component';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(private http: MoviesService,private formBuilder: FormBuilder) { }
  movieDTO: MovieDTO [] = [];

  movieForm = this.formBuilder.group({
    movieName: [null, Validators.required],
    releaseDate: [null, Validators.required],
    plot: [null, Validators.required],
    duration: [null, Validators.required],
    income: [null, Validators.required],
    score: [null, Validators.required],
    banner: [null, Validators.required],
    trailer: [null, Validators.required],
    id_poster: this.formBuilder.array([]),
    id_actors: this.formBuilder.array([]),
    id_genre: this.formBuilder.array([]),
    id_director: this.formBuilder.array([]),
    id_screenwritter: this.formBuilder.array([])
  });

  

  get idPosterArray(): FormArray {
    return this.movieForm.get('id_poster') as FormArray;
  }

  get idActorsArray(): FormArray {
    return this.movieForm.get('id_actors') as FormArray;
  }

  get idGenreArray(): FormArray {
    return this.movieForm.get('id_genre') as FormArray;
  }

  get idDirectorArray(): FormArray {
    return this.movieForm.get('id_director') as FormArray;
  }

  get idScreenwriterArray(): FormArray {
    return this.movieForm.get('id_screenwritter') as FormArray;
  }

  addIdPoster() {
    this.idPosterArray.push(this.formBuilder.control(''));
  }

  addIdActor() {
    this.idActorsArray.push(this.formBuilder.control(''));
  }

  addIdGenre() {
    this.idGenreArray.push(this.formBuilder.control(''));
  }

  addIdDirector() {
    this.idDirectorArray.push(this.formBuilder.control(''));
  }

  addIdScreenwriter() {
    this.idScreenwriterArray.push(this.formBuilder.control(''));
  }

  removeIdPoster(index: number) {
    this.idPosterArray.removeAt(index);
  }

  removeIdActor(index: number) {
    this.idActorsArray.removeAt(index);
  }

  removeIdGenre(index: number) {
    this.idGenreArray.removeAt(index);
  }

  removeIdDirector(index: number) {
    this.idDirectorArray.removeAt(index);
  }

  removeIdScreenwriter(index: number) {
    this.idScreenwriterArray.removeAt(index);
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
  // Create() {
  //   this.http.createMovie(this.movieForm.value).subscribe(
  //     (response) => {
  //       console.log('Película creada exitosamente:', response);
  //       this.getAllMovies();
  //     },
  //     (error) => {
  //       console.error('Error al crear la película:', error);
  //     }
  //   );
  // }
  
}
