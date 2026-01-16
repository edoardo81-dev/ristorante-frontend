import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiattoDetailComponent } from './piatto-detail.component';

describe('PiattoDetail', () => {
  let component: PiattoDetailComponent
  let fixture: ComponentFixture<PiattoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiattoDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiattoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
