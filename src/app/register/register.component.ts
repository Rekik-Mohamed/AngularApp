import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  errorMessage:any;
  constructor(private fb:FormBuilder,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.registerForm=this.fb.group({
      firstName:new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
            ]),
      lastName:new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ]),
      email:new FormControl('',
      [Validators.required,
      Validators.email]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      rep_password:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }
  get firstName(){
    return this.registerForm.get('firstName')
  }
  get lastName(){
    return this.registerForm.get('lastName')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }
  get rep_password(){
    return this.registerForm.get('rep_password')
  }
  createAccount(){
    const email=this.registerForm.get('email').value
    const password=this.registerForm.get('password').value
    this.authservice.createNewUser(email,password).then(
      ()=>{this.router.navigate(['/login'])},
      (error)=>{this.errorMessage=error}
    )
  }

}
