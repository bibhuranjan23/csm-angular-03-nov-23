import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcountComponent } from './studentcount.component';

describe('StudentcountComponent', () => {
  let component: StudentcountComponent;
  let fixture: ComponentFixture<StudentcountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentcountComponent]
    });
    fixture = TestBed.createComponent(StudentcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
