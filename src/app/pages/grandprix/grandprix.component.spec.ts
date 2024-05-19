import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandprixComponent } from './grandprix.component';

describe('GrandprixComponent', () => {
  let component: GrandprixComponent;
  let fixture: ComponentFixture<GrandprixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrandprixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrandprixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
