import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablenEditComponent } from './variablen-edit.component';

describe('VariablenEditComponent', () => {
  let component: VariablenEditComponent;
  let fixture: ComponentFixture<VariablenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
