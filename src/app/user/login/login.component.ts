import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, FormArray } from '@angular/forms';
import { Service } from 'src/app/services/service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {

  }
  constructor(private http: Service, private cookieService: CookieService, private router: Router) { }



  userLogin() {
    console.log("Login")
    console.log(this.loginForm.value)
    let username = this.loginForm.value.username
    this.http.login(this.loginForm.value).subscribe(response => {
      this.router.navigate(['/'])
    }, catchError => {
      console.log(catchError)
      if(catchError.status == 401){
        alert("Usuario o contraseña incorrectos")
      }
    })

    this.http.getUserByUsername(username).subscribe(data => {
      localStorage.setItem('role', data.role)
      console.log(data)
    }
    )
  }
  username: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)] })
  password: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(100)] })

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
