import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, FormArray } from '@angular/forms';
import { Service } from 'src/app/services/service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User[] = []

  constructor(private http:Service){
  }
  ngOnInit(): void {
      
  }
  postUser(){
    this.http.registerUser(this.registerForm.value).subscribe(data =>{
      console.log(data)
    })
  }
  name: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(20)]})
  lastName: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(20)]})
  username: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(20)]})
  email: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)]})
  password: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(20)]})
  repeatPassword: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(100)]})

  registerForm: FormGroup = new FormGroup({
    name:this.name,
    lastName: this.lastName,
    username: this.username,
    email: this.email,
    password: this.password,
})
}
export interface User {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}