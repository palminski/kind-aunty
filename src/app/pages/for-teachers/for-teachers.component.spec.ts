import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTeachersComponent } from './for-teachers.component';

describe('ForTeachersComponent', () => {
  let component: ForTeachersComponent;
  let fixture: ComponentFixture<ForTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForTeachersComponent]
    });
    fixture = TestBed.createComponent(ForTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
