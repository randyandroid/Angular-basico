import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiOtroComponenteComponent } from './mi-otro-componente.component';

describe('MiOtroComponenteComponent', () => {
  let component: MiOtroComponenteComponent;
  let fixture: ComponentFixture<MiOtroComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiOtroComponenteComponent]
    });
    fixture = TestBed.createComponent(MiOtroComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
