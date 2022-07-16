import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSelectPhotoComponent } from './game-select-photo.component';

describe('SelectPhotoComponent', () => {
  let component: GameSelectPhotoComponent;
  let fixture: ComponentFixture<GameSelectPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameSelectPhotoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameSelectPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
