import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderStrutureComponent } from './folder-struture.component';

describe('FolderStrutureComponent', () => {
  let component: FolderStrutureComponent;
  let fixture: ComponentFixture<FolderStrutureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FolderStrutureComponent]
    });
    fixture = TestBed.createComponent(FolderStrutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
