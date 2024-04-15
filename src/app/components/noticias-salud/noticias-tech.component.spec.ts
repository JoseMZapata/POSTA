import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasTechComponent } from './noticias-tech.component';

describe('NoticiasTechComponent', () => {
  let component: NoticiasTechComponent;
  let fixture: ComponentFixture<NoticiasTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiasTechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiasTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
