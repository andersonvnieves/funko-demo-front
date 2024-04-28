import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSkeletonComponent } from './grid-skeleton.component';

describe('CollectionGridSkeletonComponent', () => {
  let component: GridSkeletonComponent;
  let fixture: ComponentFixture<GridSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
