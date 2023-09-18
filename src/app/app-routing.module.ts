import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './pages/books-list/books-list.component';
import { AudiobooksListComponent } from './pages/audiobooks-list/audiobooks-list.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books-list',
    component: BooksListComponent
  },
  {
    path: 'audiobooks-list',
    component: AudiobooksListComponent
  },
  {
    path: 'details-book/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
