import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-small-books',
  templateUrl: './small-books.component.html',
  styleUrls: ['./small-books.component.css']
})
export class SmallBooksComponent implements OnInit {
  @Input() Id: string = '';
  @Input() coverSmallBook: string = '';
  @Input() titleSmallBook: string = '';
  @Input() authorSmallBook: string = '';
  private id: string | null = '1';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  
  }

}
