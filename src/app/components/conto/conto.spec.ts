import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContoComponent } from './conto.component';

describe('Conto', () => {
  let component: ContoComponent;
  let fixture: ComponentFixture<ContoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
