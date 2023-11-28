import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerHeaderComponent } from './maker-header.component';

describe('MakerHeaderComponent', () => {
  let component: MakerHeaderComponent;
  let fixture: ComponentFixture<MakerHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakerHeaderComponent]
    });
    fixture = TestBed.createComponent(MakerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
