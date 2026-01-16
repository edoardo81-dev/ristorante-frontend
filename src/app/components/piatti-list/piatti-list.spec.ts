import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiattiListComponent } from './piatti-list.component';

describe('PiattiList', () => {
  let component: PiattiListComponent;
  let fixture: ComponentFixture<PiattiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiattiListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiattiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
