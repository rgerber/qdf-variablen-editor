import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablenDetailComponent } from './variablen-detail.component';

describe('VariablenDetailComponent', () => {
  let component: VariablenDetailComponent;
  let fixture: ComponentFixture<VariablenDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablenDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
