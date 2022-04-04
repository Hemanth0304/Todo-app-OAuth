import { Component, Input, OnInit } from '@angular/core';
import Cat from 'src/app/models/cat';
@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
@Input() member: Cat;

  constructor() { }

  ngOnInit(): void {
  }

}
