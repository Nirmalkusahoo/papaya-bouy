import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsaTopicListComponent } from './dsa-topic-list.component';

describe('DsaTopicListComponent', () => {
  let component: DsaTopicListComponent;
  let fixture: ComponentFixture<DsaTopicListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsaTopicListComponent]
    });
    fixture = TestBed.createComponent(DsaTopicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
