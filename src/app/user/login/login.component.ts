import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, FormArray } from '@angular/forms';
import { Service } from 'src/app/services/service.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
      
  }
  constructor(private http:Service, private cookieService: CookieService) { }


  
  userLogin(){
    this.http.login(this.loginForm.value).subscribe(data =>{
      console.log(data)
      this.cookieService.set('username', data.username.toString())
      localStorage.setItem('username', data.username.toString())
      this.usernameLocalStorage = localStorage.getItem('username')
      console.log( "Cookie Username " + data.username.toString())
      console.log( "Local Storage Username " + localStorage.getItem('username'))
      console.log(this.username)
    })
  }
  username: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)]})
  password: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(100)]})

  loginForm: FormGroup = new FormGroup({
    username: this.username,
    password: this.password,
  })
  UserStorage: UserStorage = {
    username: this.username.value,
    rol: this.password.value
  }
usernameLocalStorage = localStorage.getItem('username')

}
export interface UserStorage {
  username: string;
  rol: string;
}
