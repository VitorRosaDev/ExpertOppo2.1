import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReversaoPage } from './reversao.page';

describe('ReversaoPage', () => {
  let component: ReversaoPage;
  let fixture: ComponentFixture<ReversaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
