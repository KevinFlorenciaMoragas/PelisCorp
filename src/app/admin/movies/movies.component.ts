import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies, MovieDTO } from 'src/app/interfaces/interfaces.component';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(private http: MoviesService, private formBuilder: FormBuilder) { }
  movieDTO: MovieDTO[] = [];
  items!: FormArray;
  // movieForm = new FormGroup({
  //   movieName: new FormControl<string | null>('', Validators.required),
  //   releaseDate: new FormControl<number | null>(0, Validators.required),
  //   plot: new FormControl<string | null>('', Validators.required),
  //   duration: new FormControl<number | null>(0, Validators.required),
  //   income: new FormControl<number | null>(0, Validators.required),
  //   score: new FormControl<number | null>(0, Validators.required),
  //   banner: new FormControl<string | null>('', Validators.required),
  //   trailer: new FormControl<string | null>('', Validators.required),
  //   id_poster: new FormArray([]),
  //   id_actors: new FormArray([]),
  //   id_genre: new FormArray([]),
  //   id_director: new FormArray([]),
  //   id_screenwritter: new FormArray([]),
  // })
  movieName: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(20)] })
  releaseDate: FormControl = new FormControl<number | null>(0, { validators: [Validators.required] })
  plot: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(20)] })
  photo: FormControl = new FormControl<string | null>("", { validators: [Validators.required] })
  duration: FormControl = new FormControl<number | null>(0, { validators: [Validators.required] })
  income: FormControl = new FormControl<number | null>(0, { validators: [Validators.required] })
  score: FormControl = new FormControl<number | null>(0, { validators: [Validators.required] })
  banner: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(100)] })
  trailer: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(20)] })
  

  movieForm: FormGroup = new FormGroup({
    movieName: this.movieName,
    photo: this.photo,
    releaseDate: this.releaseDate,
    plot: this.plot,
    duration: this.duration,
    income: this.income,
    score: this.score,
    banner: this.banner,
    trailer: this.trailer,
    id_poster: new FormArray([]),
    id_actors: new FormArray([]),
    id_genre: new FormArray([]),
    id_director: new FormArray([]),
    id_screenwritter: new FormArray([])
  })


  AddIdActors() {
    this.items = this.movieForm.get("id_actors") as FormArray;
    this.items.push(this.GenRowActors());
  }

  AddIdGenre() {
    this.items = this.movieForm.get("id_genre") as FormArray;
    this.items.push(this.GenRowGenre());
  }

  AddIdDirector() {
    this.items = this.movieForm.get("id_director") as FormArray;
    this.items.push(this.GenRowDirector());
  }

  AddIdScreenwritter() {
    this.items = this.movieForm.get("id_screenwritter") as FormArray;
    this.items.push(this.GenRowScreenwritter());
  }

  get id_actors() {
    return this.movieForm.get("id_actors") as FormArray;
  }

  get id_genre() {
    return this.movieForm.get("id_genre") as FormArray;
  }

  get id_director() {
    return this.movieForm.get("id_director") as FormArray;
  }

  get id_screenwritter() {
    return this.movieForm.get("id_screenwritter") as FormArray;
  }

  GenRowActors(): FormGroup {
    return new FormGroup({
      id: new FormControl('')
    });
  }

  GenRowGenre(): FormGroup {
    return new FormGroup({
      id: new FormControl('')
    });
  }

  GenRowDirector(): FormGroup {
    return new FormGroup({
      id: new FormControl('')
    });
  }

  GenRowScreenwritter(): FormGroup {
    return new FormGroup({
      id: new FormControl('')
    });
  }
  RemoveActor(index:any){
    this.items = this.movieForm.get("id_actors") as FormArray;
    this.items.removeAt(index)
  }
  RemoveGenre(index:any){
    this.items = this.movieForm.get("id_genre") as FormArray;
    this.items.removeAt(index)
  }
  RemoveDirector(index:any){
    this.items = this.movieForm.get("id_director") as FormArray;
    this.items.removeAt(index)
  }
  RemoveScreenwritter(index:any){
    this.items = this.movieForm.get("id_screenwritter") as FormArray;
    this.items.removeAt(index)
  }
  movies: Movies[] = []
  movie: Movies = {
    id: 0,
    movieName: '',
    releaseDate: new Date(),
    plot: '',
    duration: 0,
    income: 0,
    photo:'',
    score: 0,
    trailer: '',
    poster: [],
    favorites: [],
    director: [],
    actors: [],
    genre: [],
    awards: [],
    reviews: [],
    screenwritter: [],
    banner: ''
  }
  moviesDTO: MovieDTO = {
    movieName: '',
    releaseDate: 0,
    plot: '',
    photo:'',
    duration: 0,
    income: 0,
    score: 0,
    banner: '',
    trailer: '',
    poster: [],
    id_actors: [0],
    id_genre: [0],
    id_director: [0],
    id_screenwritter: [0],
  }
  ngOnInit() {
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
  Create() {
    const json = {
      movieName: this.movieForm.value.movieName,
      releaseDate: this.movieForm.value.releaseDate,
      plot: this.movieForm.value.plot,
      photo:this.movieForm.value.photo,
      duration: this.movieForm.value.duration,
      income: this.movieForm.value.income,
      score: this.movieForm.value.score,
      banner: this.movieForm.value.banner,
      trailer: this.movieForm.value.trailer,
      poster: this.movieForm.value.id_poster.map((item: any) => item.id),
      id_actors: this.movieForm.value.id_actors.map((item: any) => item.id),
      id_genre: this.movieForm.value.id_genre.map((item: any) => item.id),
      id_director: this.movieForm.value.id_director.map((item: any) => item.id),
      id_screenwritter: this.movieForm.value.id_screenwritter.map((item: any) => item.id)
    };
    console.log(json)
    this.movieDTO = this.movieForm.value
    this.http.createMovie(json).subscribe(data => {
      console.log(json)
    }

    )
  }

}
