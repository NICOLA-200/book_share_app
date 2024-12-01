import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {MenuComponent} from './components/menu/menu.component';
import {MainComponent} from './pages/main/main.component';
import {BookListComponent} from './pages/book-list/book-list.component';
import {BookCardComponent} from './components/book-card/book-card.component';
import {RatingComponent} from './components/rating/rating.component';
import {ManageBookComponent} from './pages/manage-book/manage-book.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    BookListComponent,
    BookCardComponent,
    RatingComponent,
    MainComponent,
    MenuComponent,
    ManageBookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule
  ]
})
export class BookModule { }
