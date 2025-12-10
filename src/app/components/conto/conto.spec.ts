import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conto } from './conto';

describe('Conto', () => {
  let component: Conto;
  let fixture: ComponentFixture<Conto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
