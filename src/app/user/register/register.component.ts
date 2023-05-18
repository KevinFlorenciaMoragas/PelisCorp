import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, FormArray } from '@angular/forms';
import { Service } from 'src/app/services/service.service';
import { User } from 'src/app/interfaces/interfaces.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User[] = []
  usernameLocalStorage = localStorage.getItem('username')
  constructor(private http:Service){
  }
  ngOnInit(): void {
      
  }
  postUser(){
    this.http.registerUser(this.registerForm.value).subscribe(data =>{
      console.log(data)
      // this.http.login(this.registerForm.value).subscribe(data =>{
      //   console.log(data)
      // } 
      // )
    })
  }
 
  
  username: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(20)]})
  email: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)]})
  password: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(20)]})
  repeatPassword: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(100)]})

  registerForm: FormGroup = new FormGroup({
    username: this.username,
    email: this.email,
    password: this.password,
    repeatPassword: this.repeatPassword
})
}
