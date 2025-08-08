import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OppoNelesPage } from './oppo-neles.page';

describe('OppoNelesPage', () => {
  let component: OppoNelesPage;
  let fixture: ComponentFixture<OppoNelesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OppoNelesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
