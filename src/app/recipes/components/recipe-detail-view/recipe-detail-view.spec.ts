import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecipeDetailView} from './recipe-detail-view';


describe('RecipeDetailView', () => {
  let component: RecipeDetailView;
  let fixture: ComponentFixture<RecipeDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeDetailView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
