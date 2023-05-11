import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child001Component } from './child001.component';

describe('Child001Component', () => {
  let component: Child001Component;
  let fixture: ComponentFixture<Child001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child001Component]
    });
    fixture = TestBed.createComponent(Child001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
