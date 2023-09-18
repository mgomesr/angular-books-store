import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { booksDetails } from '../../../data/bookDetails';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {
  private id: string | null = '';
  coverImageDetail: string = '';
  titleBookDetail: string = '';
  authorBookDetail: string = '';
  textBookDetail: string = '';
  linkDownload: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'));
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = booksDetails.filter(article => article.Id == id)[0]

    this.coverImageDetail = result.coverImageDetail;
    this.titleBookDetail = result.titleBookDetail;
    this.authorBookDetail = result.authorBookDetail;
    this.textBookDetail = result.textBookDetails;
    this.linkDownload = result.linkDownload;
  }

}
