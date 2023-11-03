import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBankDialogComponent } from './new-bank-dialog.component';

describe('NewBankDialogComponent', () => {
  let component: NewBankDialogComponent;
  let fixture: ComponentFixture<NewBankDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBankDialogComponent]
    });
    fixture = TestBed.createComponent(NewBankDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
