import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojTechComponent } from './reloj-tech.component';

describe('RelojTechComponent', () => {
  let component: RelojTechComponent;
  let fixture: ComponentFixture<RelojTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelojTechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelojTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
