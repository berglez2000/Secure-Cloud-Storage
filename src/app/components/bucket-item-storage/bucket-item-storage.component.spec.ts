import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketItemStorageComponent } from './bucket-item-storage.component';

describe('BucketItemStorageComponent', () => {
  let component: BucketItemStorageComponent;
  let fixture: ComponentFixture<BucketItemStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucketItemStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketItemStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
