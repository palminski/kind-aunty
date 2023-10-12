import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentHelpComponent } from './development-help.component';

describe('DevelopmentHelpComponent', () => {
  let component: DevelopmentHelpComponent;
  let fixture: ComponentFixture<DevelopmentHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevelopmentHelpComponent]
    });
    fixture = TestBed.createComponent(DevelopmentHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
