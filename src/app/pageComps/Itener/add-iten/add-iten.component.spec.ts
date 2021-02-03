import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItenComponent } from './add-iten.component';

describe('AddItenComponent', () => {
  let component: AddItenComponent;
  let fixture: ComponentFixture<AddItenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
