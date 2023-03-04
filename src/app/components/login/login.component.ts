import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscriber } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any ='';
  password: any ='';
  loginForm: any ='';
  form: any = '';

  constructor( private authService : AuthService, private  router : Router ) { }


  onSubmit(form: NgForm){
    console.log(form.value);

    if(form.valid){
      this.authService.login(form.value).subscribe(result => {
        this.router.navigate(['dashboard']);
      },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }

  ngOnInit(): void {
  }

}
