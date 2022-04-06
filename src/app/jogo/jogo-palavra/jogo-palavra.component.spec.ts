import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoPalavraComponent } from './jogo-palavra.component';

describe('JogoPalavraComponent', () => {
  let component: JogoPalavraComponent;
  let fixture: ComponentFixture<JogoPalavraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoPalavraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoPalavraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
