import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowButton } from './rainbow-button.component';

describe('RainbowButton', () => {
  let component: RainbowButton;
  let fixture: ComponentFixture<RainbowButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RainbowButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RainbowButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
