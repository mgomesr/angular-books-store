import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BooksListComponent } from './pages/books-list/books-list.component';
import { BooksInfoComponent } from './pages/books-info/books-info.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SmallBooksComponent } from './components/small-books/small-books.component';
import { AudiobooksListComponent } from './pages/audiobooks-list/audiobooks-list.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { BigCardPresentationComponent } from './components/big-card/big-card-presentation/big-card-presentation.component';
import { BigCardCentralComponent } from './components/big-card/big-card-central/big-card-central.component';
import { BigCardRightComponent } from './components/big-card/big-card-right/big-card-right.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { DetailsComponent } from './pages/details/details.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksListComponent,
    BooksInfoComponent,
    MenuBarComponent,
    SmallBooksComponent,
    AudiobooksListComponent,
    BigCardComponent,
    BigCardPresentationComponent,
    BigCardCentralComponent,
    BigCardRightComponent,
    SmallCardComponent,
    DetailsComponent,
    DetailsBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
