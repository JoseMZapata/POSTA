import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojDeporComponent } from './reloj-depor.component';

describe('RelojDeporComponent', () => {
  let component: RelojDeporComponent;
  let fixture: ComponentFixture<RelojDeporComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelojDeporComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelojDeporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
