import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablenComponent } from './variablen.component';

describe('VariablenComponent', () => {
  let component: VariablenComponent;
  let fixture: ComponentFixture<VariablenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
