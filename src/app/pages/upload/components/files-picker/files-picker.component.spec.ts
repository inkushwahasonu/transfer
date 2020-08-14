import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesPickerComponent } from './files-picker.component';

describe('FilesPickerComponent', () => {
  let component: FilesPickerComponent;
  let fixture: ComponentFixture<FilesPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilesPickerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
