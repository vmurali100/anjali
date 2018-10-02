import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuChildComponent } from './stu-child.component';

describe('StuChildComponent', () => {
  let component: StuChildComponent;
  let fixture: ComponentFixture<StuChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
