import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItenListComponent } from './iten-list.component';

describe('ItenListComponent', () => {
  let component: ItenListComponent;
  let fixture: ComponentFixture<ItenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItenListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
