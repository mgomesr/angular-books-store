import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card-central',
  templateUrl: './big-card-central.component.html',
  styleUrls: ['./big-card-central.component.css']
})
export class BigCardCentralComponent implements OnInit {
  @Input() coverImageCentral: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
