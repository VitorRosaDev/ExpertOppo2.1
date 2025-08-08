import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartphonesPage } from './smartphones.page';

describe('SmartphonesPage', () => {
  let component: SmartphonesPage;
  let fixture: ComponentFixture<SmartphonesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
