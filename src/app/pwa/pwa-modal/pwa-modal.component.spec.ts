import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaModalComponent } from './pwa-modal.component';

describe('PwaModalComponent', () => {
  let component: PwaModalComponent;
  let fixture: ComponentFixture<PwaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PwaModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PwaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
