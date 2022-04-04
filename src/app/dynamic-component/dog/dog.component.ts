import { Component, Input, OnInit } from '@angular/core';

import dog from 'src/app/models/dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  @Input() member: dog;

  constructor() { }

  ngOnInit(): void {
  }

}
