import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationExampleComponent } from './pagination-example.component';

describe('PaginationComponent', () => {
  let component: PaginationExampleComponent;
  let fixture: ComponentFixture<PaginationExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationExampleComponent]
    });
    fixture = TestBed.createComponent(PaginationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
