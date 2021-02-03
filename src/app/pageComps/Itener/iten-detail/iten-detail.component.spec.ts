import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItenDetailComponent } from './iten-detail.component';

describe('ItenDetailComponent', () => {
  let component: ItenDetailComponent;
  let fixture: ComponentFixture<ItenDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItenDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
