import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBankPopupComponent } from './delete-bank-popup.component';

describe('DeleteBankPopupComponent', () => {
  let component: DeleteBankPopupComponent;
  let fixture: ComponentFixture<DeleteBankPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBankPopupComponent]
    });
    fixture = TestBed.createComponent(DeleteBankPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
