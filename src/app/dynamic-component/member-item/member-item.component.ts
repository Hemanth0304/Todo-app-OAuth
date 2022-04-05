import { Component, OnInit, Input, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import pets from 'src/app/models/pets';
import cat from 'src/app/models/cat';
import dog from 'src/app/models/dog';
import { CatComponent } from '../cat/cat.component';
import { DogComponent } from '../dog/dog.component';

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.css']
})
export class MemberItemComponent implements OnInit {
  @Input() member: pets;

  constructor( private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,) { }

  ngOnInit(): void {

    this.viewContainerRef.clear();
    const cat = this.member as cat;
    const dog = this.member as dog;


    if (cat.Accounts) {
      const catComponentFactory = this.componentFactoryResolver.resolveComponentFactory(CatComponent);
      const componentRef = this.viewContainerRef.createComponent(catComponentFactory);
      componentRef.instance.member = cat;
    } 


    else if (dog.IT) 
    {
      const dogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DogComponent);
      const componentRef = this.viewContainerRef.createComponent(dogComponentFactory);
      componentRef.instance.member = dog;
    }
  }


  }


