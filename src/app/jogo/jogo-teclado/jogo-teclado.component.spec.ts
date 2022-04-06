import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoTecladoComponent } from './jogo-teclado.component';

describe('JogoTecladoComponent', () => {
  let component: JogoTecladoComponent;
  let fixture: ComponentFixture<JogoTecladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoTecladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoTecladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
