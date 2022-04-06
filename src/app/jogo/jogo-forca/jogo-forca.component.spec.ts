import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoForcaComponent } from './jogo-forca.component';

describe('JogoForcaComponent', () => {
  let component: JogoForcaComponent;
  let fixture: ComponentFixture<JogoForcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoForcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoForcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
