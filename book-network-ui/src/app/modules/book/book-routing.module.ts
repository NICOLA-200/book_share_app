import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {BookListComponent} from './pages/book-list/book-list.component';
import {MyBooksComponent} from './pages/my-books/my-books.component';
import {ManageBookComponent} from './pages/manage-book/manage-book.component';
import {BookDetailsComponent} from './pages/book-details/book-details.component';
import {authGuard} from '../../services/guard/auth.guard';
import {ReturnedBooksComponent} from './pages/returned-books/returned-books.component';
import {BorrowedBookListComponent} from './pages/borrowed-book-list/borrowed-book-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // canActivate: [authGuard],
    children: [
      {
        path: 'my-books',
        component: MyBooksComponent,

      },
  {
    path: 'boo',
    component: BookListComponent,
    // canActivate: [authGuard]
  },

  {
    path: 'my-borrowed-books',
     component: BorrowedBookListComponent,

  },
  {
    path: 'my-returned-books',
     component: ReturnedBooksComponent,

  },
  {
    path: 'details/:bookId',
     component: BookDetailsComponent,

  },
  {
    path: 'manage',
    component: ManageBookComponent,

  },
  {
    path: 'manage/:bookId',
    component: ManageBookComponent,

  }
]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
