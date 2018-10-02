import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuParentComponent } from './stu-parent.component';

describe('StuParentComponent', () => {
  let component: StuParentComponent;
  let fixture: ComponentFixture<StuParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
