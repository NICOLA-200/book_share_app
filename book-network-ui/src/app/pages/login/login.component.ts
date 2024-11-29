 import {Component, OnInit} from '@angular/core';
 import {AuthenticationRequest} from '../../services/models/authentication-request';
 import {Router} from '@angular/router';
 import {AuthenticationControllerService} from '../../services/services/authentication-controller.service';
 import {TokenService} from '../../services/token/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements  OnInit {
  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];


  constructor(
    private  router: Router,
    private  authService: AuthenticationControllerService,
    private   tokenService: TokenService
  ) {}

  ngOnInit(): void {

  }

  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string;
        this.router.navigate(['books']);
      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.errorMsg);
        }
      }
    });
  }

  register() {
    this.router.navigate(['register']).catch(r => console.error(r) );
  }
}
``
