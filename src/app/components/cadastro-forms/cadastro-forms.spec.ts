import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroForms } from './cadastro-forms';

describe('CadastroForms', () => {
  let component: CadastroForms;
  let fixture: ComponentFixture<CadastroForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
