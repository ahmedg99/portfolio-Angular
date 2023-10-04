/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormcontactComponent } from './formcontact.component';

describe('FormcontactComponent', () => {
  let component: FormcontactComponent;
  let fixture: ComponentFixture<FormcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
