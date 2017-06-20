import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigridComponent } from './bigrid.component';

describe('BigridComponent', () => {
  let component: BigridComponent;
  let fixture: ComponentFixture<BigridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
