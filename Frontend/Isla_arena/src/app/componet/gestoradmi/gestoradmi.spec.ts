import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gestoradmi } from './gestoradmi';

describe('Gestoradmi', () => {
  let component: Gestoradmi;
  let fixture: ComponentFixture<Gestoradmi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gestoradmi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gestoradmi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
