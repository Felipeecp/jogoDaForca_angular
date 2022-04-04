import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoMainComponent } from './jogo-main.component';

describe('JogoMainComponent', () => {
  let component: JogoMainComponent;
  let fixture: ComponentFixture<JogoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
