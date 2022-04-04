import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneComponentComponent } from './done-component.component';

describe('DoneComponentComponent', () => {
  let component: DoneComponentComponent;
  let fixture: ComponentFixture<DoneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
