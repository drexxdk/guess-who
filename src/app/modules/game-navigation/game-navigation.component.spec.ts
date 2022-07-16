import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNavigationComponent } from './game-navigation.component';

describe('GameNavigationComponent', () => {
  let component: GameNavigationComponent;
  let fixture: ComponentFixture<GameNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameNavigationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
