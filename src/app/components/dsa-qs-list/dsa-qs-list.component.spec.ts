import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsaQsListComponent } from './dsa-qs-list.component';

describe('DsaQsListComponent', () => {
  let component: DsaQsListComponent;
  let fixture: ComponentFixture<DsaQsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsaQsListComponent]
    });
    fixture = TestBed.createComponent(DsaQsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
