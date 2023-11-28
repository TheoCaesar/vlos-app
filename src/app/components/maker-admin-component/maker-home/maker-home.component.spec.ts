import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerHomeComponent } from './maker-home.component';

describe('MakerHomeComponent', () => {
  let component: MakerHomeComponent;
  let fixture: ComponentFixture<MakerHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakerHomeComponent]
    });
    fixture = TestBed.createComponent(MakerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
