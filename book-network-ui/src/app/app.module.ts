import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { NgModule} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
