import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasDeporComponent } from './noticias-depor.component';

describe('NoticiasDeporComponent', () => {
  let component: NoticiasDeporComponent;
  let fixture: ComponentFixture<NoticiasDeporComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiasDeporComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiasDeporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
