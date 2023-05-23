import { Component } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Genre } from 'src/app/interfaces/interfaces.component';
import { Actor } from 'src/app/interfaces/interfaces.component';
import { OnInit } from '@angular/core';
import { Director } from 'src/app/interfaces/interfaces.component';

@Component({
  selector: 'app-movies-by-actor',
  templateUrl: './movies-by-actor.component.html',
  styleUrls: ['./movies-by-actor.component.css']
})
export class MoviesByActorComponent implements OnInit {
  constructor(private http: MoviesService,private router:Router ,private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.getAllMoviesByActor()
  }
  movies: Movies[] = []
  id: any
  idActor: any
  actorName: string = ""
  actor : Actor  = {
    id: 0,
    name: "",
    lastName: "",
    photo: "",
    biography: "",
    birthPlace: "",
    birthDate: 0
  }
  refresh(id: any) {
    console.log("Estoy en refresh")
   // this.idActor = (document.getElementById("actorId") as HTMLInputElement).value
    console.log(this.idActor)
    this.router.navigate(['movies-by-actor/',id])
  }
  getAllMoviesByActor() {
    const genreIdParam = this.route.snapshot.paramMap.get('id');
    if (genreIdParam !== null) {
      this.id = genreIdParam;
      this.idActor = genreIdParam;
    }
    this.http.listAllMoviesByActor(this.id).subscribe(data => {
      console.log(data)
      this.movies = data as Movies[]
      
      console.log(this.actor)
      console.log(this.movies)
    },
    (error) => {
      this.router.navigate(['**'])
    })
    this.http.getActorById(this.idActor).subscribe(actorData => {
      console.log(actorData)
      this.actor = actorData as Actor
      console.log(this.actor)

    },
    (error) => {
      this.router.navigate(['**'])
    })
  }
}

