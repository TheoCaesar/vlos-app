import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerSidebarComponent } from './maker-sidebar.component';

describe('MakerSidebarComponent', () => {
  let component: MakerSidebarComponent;
  let fixture: ComponentFixture<MakerSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakerSidebarComponent]
    });
    fixture = TestBed.createComponent(MakerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
