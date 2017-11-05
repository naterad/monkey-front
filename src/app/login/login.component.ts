import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
  // user = {
  //   "email_address": localStorage.getItem("email"),
  //   "password": localStorage.getItem("password")
  // }
  user = {
    "email_address": "",
    "password": ""
  }

  constructor(
    private loginService: LoginService,
    private router: Router
  ){ }

  login(){
    this.loginService.login(this.user.email_address, this.user.password)
      .subscribe(
        obj => {
          // console.log(obj['token']);
          localStorage.setItem("token", obj["token"]);

          var link = ['/dashboard'];
          this.router.navigate(link);
        },
        error => {
          console.log(error);
          localStorage.removeItem("token");
        }
      )
  }
}
