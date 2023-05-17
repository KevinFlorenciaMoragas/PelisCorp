import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit{

  constructor(private http: MoviesService, private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder) { }

  id: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(100)]);
  duration: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(20)]);
  income: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(20)]);
  movieName: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(100)]);
  release_date: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(10)]);
  plot: FormControl = new FormControl('', [Validators.minLength(10), Validators.maxLength(8000)]);
  score: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(3)]);
  trailer: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(200)]);

  MyNewForm: FormGroup = new FormGroup({
    id: this.id,
    duration: this.duration,
    income: this.income,
    movieName: this.movieName,
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
    screenwritter: []
  }

  ngOnInit() {
    this.getMovie()
  }

  getMovie() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.http.getMovieById(id).subscribe(data => {
      console.log(data);
      this.movie = data as Movies; 
      console.log(this.movie);
      console.log(this.movie.movieName);
    });
  }
}
