import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasCienciaComponent } from './noticias-ciencia.component';

describe('NoticiasCienciaComponent', () => {
  let component: NoticiasCienciaComponent;
  let fixture: ComponentFixture<NoticiasCienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiasCienciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiasCienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
