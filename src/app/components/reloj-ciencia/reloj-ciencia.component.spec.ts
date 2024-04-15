import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojCienciaComponent } from './reloj-ciencia.component';

describe('RelojCienciaComponent', () => {
  let component: RelojCienciaComponent;
  let fixture: ComponentFixture<RelojCienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelojCienciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelojCienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
