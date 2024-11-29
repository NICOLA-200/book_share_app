import {Component, OnInit} from '@angular/core';
import {RegistrationRequest} from '../../services/models/registration-request';
import {AuthenticationControllerService} from '../../services/services/authentication-controller.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements  OnInit{

    errorMsg : string[] = []
    registerRequest : RegistrationRequest = {email: '',  firstname: '', password:'', lastname:''}

  constructor(
    private router: Router,
    private authService: AuthenticationControllerService
  ) {
  }

  ngOnInit() {
  }


  login() {
    this.router.navigate(['login']).catch(r => console.error(r) );
  }



  register() {
    this.errorMsg = [];
    this.authService.register({
      body: this.registerRequest
    })
      .subscribe({
        next: () => {
          this.router.navigate(['activate-account']);
        },
        error: (err) => {
          this.errorMsg = err.error.validationErrors;
        }
      });
  }
}
