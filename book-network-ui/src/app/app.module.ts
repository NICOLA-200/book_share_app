import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './pages/register/register.component';
import {HttpTokenInterceptor} from './services/interceptor/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule



  ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
