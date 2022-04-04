import { Component, OnInit,ComponentFactoryResolver } from '@angular/core';
import { DynamicServiceService } from 'src/app/service/dynamic-service.service';
import pets from 'src/app/models/pets'; 


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members: pets[];

  constructor(
    private dynamic: DynamicServiceService,
  ) { }

  ngOnInit(): void {
    this.members=this.dynamic.members;
  }

}
