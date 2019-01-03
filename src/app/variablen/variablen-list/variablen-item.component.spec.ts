import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablenItemComponent } from './variablen-item.component';

describe('VariablenItemComponent', () => {
  let component: VariablenItemComponent;
  let fixture: ComponentFixture<VariablenItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablenItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
