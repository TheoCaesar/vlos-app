import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerDashboardComponent } from './maker-dashboard.component';

describe('MakerDashboardComponent', () => {
  let component: MakerDashboardComponent;
  let fixture: ComponentFixture<MakerDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakerDashboardComponent]
    });
    fixture = TestBed.createComponent(MakerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
