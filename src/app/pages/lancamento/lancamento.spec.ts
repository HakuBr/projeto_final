import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lancamento } from './lancamento';

describe('Lancamento', () => {
  let component: Lancamento;
  let fixture: ComponentFixture<Lancamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lancamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lancamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
