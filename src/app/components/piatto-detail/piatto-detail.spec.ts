import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiattoDetail } from './piatto-detail';

describe('PiattoDetail', () => {
  let component: PiattoDetail;
  let fixture: ComponentFixture<PiattoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiattoDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiattoDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
