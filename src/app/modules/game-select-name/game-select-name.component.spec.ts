import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSelectNameComponent } from './game-select-name.component';

describe('SelectNameComponent', () => {
  let component: GameSelectNameComponent;
  let fixture: ComponentFixture<GameSelectNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameSelectNameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameSelectNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
