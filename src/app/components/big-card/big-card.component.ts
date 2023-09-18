import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() coverImageCentral: string = '';
  @Input() coverImageRightAuthor: string = '';
  @Input() coverImageRightAudiobook: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
