import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteSearchBarComponent } from './auto-complete-search-bar.component';

describe('AutoCompleteSearchBarComponent', () => {
  let component: AutoCompleteSearchBarComponent;
  let fixture: ComponentFixture<AutoCompleteSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCompleteSearchBarComponent]
    });
    fixture = TestBed.createComponent(AutoCompleteSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
