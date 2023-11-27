import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBankPopupComponent } from './edit-bank-popup.component';

describe('EditBankPopupComponent', () => {
  let component: EditBankPopupComponent;
  let fixture: ComponentFixture<EditBankPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBankPopupComponent]
    });
    fixture = TestBed.createComponent(EditBankPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
