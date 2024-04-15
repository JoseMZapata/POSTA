import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojSaluComponent } from './reloj-salu.component';

describe('RelojSaluComponent', () => {
  let component: RelojSaluComponent;
  let fixture: ComponentFixture<RelojSaluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelojSaluComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelojSaluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
