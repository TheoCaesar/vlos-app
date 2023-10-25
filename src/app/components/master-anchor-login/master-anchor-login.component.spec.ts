import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAnchorLoginComponent } from './master-anchor-login.component';

describe('MasterAnchorLoginComponent', () => {
  let component: MasterAnchorLoginComponent;
  let fixture: ComponentFixture<MasterAnchorLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterAnchorLoginComponent]
    });
    fixture = TestBed.createComponent(MasterAnchorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
