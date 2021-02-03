import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonComponent } from './update-person.component';

describe('UpdatePersonComponent', () => {
  let component: UpdatePersonComponent;
  let fixture: ComponentFixture<UpdatePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
