import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankStatusPopupComponent } from './bank-status-popup.component';

describe('BankStatusPopupComponent', () => {
  let component: BankStatusPopupComponent;
  let fixture: ComponentFixture<BankStatusPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankStatusPopupComponent]
    });
    fixture = TestBed.createComponent(BankStatusPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
