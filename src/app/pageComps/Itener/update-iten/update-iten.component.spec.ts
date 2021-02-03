import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItenComponent } from './update-iten.component';

describe('UpdateItenComponent', () => {
  let component: UpdateItenComponent;
  let fixture: ComponentFixture<UpdateItenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateItenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
