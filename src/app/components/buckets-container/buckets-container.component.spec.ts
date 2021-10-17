import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketsContainerComponent } from './buckets-container.component';

describe('BucketsContainerComponent', () => {
  let component: BucketsContainerComponent;
  let fixture: ComponentFixture<BucketsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucketsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
