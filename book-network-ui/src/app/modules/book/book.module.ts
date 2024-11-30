import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {MenuComponent} from './components/menu/menu.component';
import {MainComponent} from './pages/main/main.component';
import {HttpClient} from '@angular/common/http';


@NgModule({
  declarations: [

    MainComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
