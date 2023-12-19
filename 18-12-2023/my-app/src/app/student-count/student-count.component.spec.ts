import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCountComponent } from './student-count.component';

describe('StudentCountComponent', () => {
  let component: StudentCountComponent;
  let fixture: ComponentFixture<StudentCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCountComponent]
    });
    fixture = TestBed.createComponent(StudentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
