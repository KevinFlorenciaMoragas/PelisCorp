import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, FormArray } from '@angular/forms';
import { Service } from 'src/app/services/service.service';
import { User } from '../register/register.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
      
  }
  constructor(private http:Service){

  }
  userLogin(){
    this.http.login(this.loginForm.value).subscribe(data =>{
      console.log(data)
      console.log(this.username)
    })
  }
  username: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)]})
  password: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(100)]})

  loginForm: FormGroup = new FormGroup({
    username: this.username,
    password: this.password,
  })

}
