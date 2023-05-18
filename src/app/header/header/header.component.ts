

import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { OnInit } from '@angular/core';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usernameLocalStorage = localStorage.getItem('username')
  roleLocalStorage = localStorage.getItem('role')
  search: string = ''
  movies: Movies[] = []
  constructor(private http: MoviesService, private router: Router) { }
  youtubeApiLoaded = false;
  ngOnInit() {
    if (!this.youtubeApiLoaded) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      this.youtubeApiLoaded = true;
    }
  }
  logOut() {
    localStorage.clear()
    window.location.reload()
  }
  searchMovie() {
    let search = (document.getElementById("search") as HTMLInputElement).value;
    console.log(search)
    if (search != null) {
      this.http.listAllMoviesByTitle(search).subscribe(data => {
        this.movies = data;
        console.log(this.movies)
        this.router.navigate(['/movie-by-movie-name', search])
      })
    } else {

    }
    //localStorage.setItem('search', search)
  }


  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

}
