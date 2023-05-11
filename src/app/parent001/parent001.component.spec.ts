import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent001Component } from './parent001.component';

describe('Parent001Component', () => {
  let component: Parent001Component;
  let fixture: ComponentFixture<Parent001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parent001Component]
    });
    fixture = TestBed.createComponent(Parent001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
