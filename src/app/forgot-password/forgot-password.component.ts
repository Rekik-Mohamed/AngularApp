import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email:string;
  errorMessage:any;
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  forgotpassword(email:string){
    this.authservice.forgetPassword(this.email).then(
      ()=>{this.router.navigate(['/login'])},
      (error)=>{
        this.errorMessage=error}
    )
  }
}
