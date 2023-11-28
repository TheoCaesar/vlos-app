import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAnchorDashboardComponent } from './master-anchor-dashboard.component';

describe('MasterAnchorDashboardComponent', () => {
  let component: MasterAnchorDashboardComponent;
  let fixture: ComponentFixture<MasterAnchorDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterAnchorDashboardComponent]
    });
    fixture = TestBed.createComponent(MasterAnchorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
