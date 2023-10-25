import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarExtComponent } from './sidebar-ext.component';

describe('SidebarExtComponent', () => {
  let component: SidebarExtComponent;
  let fixture: ComponentFixture<SidebarExtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarExtComponent]
    });
    fixture = TestBed.createComponent(SidebarExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
