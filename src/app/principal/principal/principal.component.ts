import { Component } from '@angular/core'; 
import { Movies } from 'src/app/interfaces/interfaces.component'; 
import { MoviesService } from 'src/app/services/movies.service'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; import { OnInit } from '@angular/core'; 
@Component({ 
  selector: 'app-principal', 
  templateUrl: './principal.component.html', 
  styleUrls: ['./principal.component.css'] 
}) 

export class PrincipalComponent { 
  constructor(private http: MoviesService){ } 
  movies: Movies[] = []
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
  }
