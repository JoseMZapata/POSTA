import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasTopComponent } from './noticias-top.component';

describe('NoticiasTopComponent', () => {
  let component: NoticiasTopComponent;
  let fixture: ComponentFixture<NoticiasTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiasTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiasTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
