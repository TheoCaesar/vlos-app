import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiBanksComponent } from './fi-banks.component';

describe('FiBanksComponent', () => {
  let component: FiBanksComponent;
  let fixture: ComponentFixture<FiBanksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiBanksComponent]
    });
    fixture = TestBed.createComponent(FiBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
