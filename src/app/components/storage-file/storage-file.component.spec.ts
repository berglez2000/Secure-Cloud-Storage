import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageFileComponent } from './storage-file.component';

describe('StorageFileComponent', () => {
  let component: StorageFileComponent;
  let fixture: ComponentFixture<StorageFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
