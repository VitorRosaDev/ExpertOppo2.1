import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoasPraticasPage } from './boas-praticas.page';

describe('BoasPraticasPage', () => {
  let component: BoasPraticasPage;
  let fixture: ComponentFixture<BoasPraticasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BoasPraticasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
