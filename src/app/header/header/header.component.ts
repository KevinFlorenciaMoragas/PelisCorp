import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  usernameLocalStorage = localStorage.getItem('username')
  movies: Movies[] = []
  constructor(private http:MoviesService) { }
  youtubeApiLoaded = false;
  ngOnInit(){
    if(!this.youtubeApiLoaded) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      this.youtubeApiLoaded = true;
    }
  }
  searchMovie() {
    let search = (document.getElementById("search") as HTMLInputElement).value;
    console.log(search)
    if(search === ''){
      return null;
    }else{
      
      // this.http.searchMovie(search).subscribe(data => {
      //   console.log(data)
      //   this.movies = data as Movies[]
      //   console.log(this.movies)
      // }
     
      // )
      
      return true;
    }
    //localStorage.setItem('search', search)
  }
}
