import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiattiList } from './piatti-list';

describe('PiattiList', () => {
  let component: PiattiList;
  let fixture: ComponentFixture<PiattiList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiattiList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiattiList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
