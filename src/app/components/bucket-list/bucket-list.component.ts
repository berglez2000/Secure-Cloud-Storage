import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { BucketService } from 'src/app/services/bucket.service';
import { Subscription } from 'rxjs';
import { Bucket } from 'src/app/Bucket';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {
  buckets: Bucket[] = [];
  bucketLength!: number;
  showAddBucket: boolean = false;
  subscription!: Subscription;

  constructor(private bucketService: BucketService, private uiService: UiService) { 

    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddBucket = value);

  }

  ngOnInit(): void {
    this.bucketService.getBuckets().subscribe((buckets) => {
      this.buckets = buckets;
      this.bucketLength = buckets.length;
    });
  }

  toggleAddBucket(){
    this.uiService.toggleAddBucket();
  }
}
