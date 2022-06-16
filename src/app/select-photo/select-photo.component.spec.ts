import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPhotoComponent } from './select-photo.component';

describe('SelectPhotoComponent', () => {
  let component: SelectPhotoComponent;
  let fixture: ComponentFixture<SelectPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
