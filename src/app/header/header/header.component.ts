import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  usernameLocalStorage = localStorage.getItem('username')

  constructor() { }
  searchMovie() {
    let search = (document.getElementById("search") as HTMLInputElement).value;
    console.log(search)
    //localStorage.setItem('search', search)
  }
}
