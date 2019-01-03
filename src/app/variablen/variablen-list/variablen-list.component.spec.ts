import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablenListComponent } from './variablen-list.component';

describe('VariablenListComponent', () => {
  let component: VariablenListComponent;
  let fixture: ComponentFixture<VariablenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
