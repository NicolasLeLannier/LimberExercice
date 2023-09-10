import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingJsonFilesComponent } from './reading-json-files.component';

describe('ReadingJsonFilesComponent', () => {
  let component: ReadingJsonFilesComponent;
  let fixture: ComponentFixture<ReadingJsonFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadingJsonFilesComponent]
    });
    fixture = TestBed.createComponent(ReadingJsonFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
