import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpricesComponent } from './enterprices.component';

describe('EnterpricesComponent', () => {
  let component: EnterpricesComponent;
  let fixture: ComponentFixture<EnterpricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
