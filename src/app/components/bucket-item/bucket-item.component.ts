import { Component, OnInit, Input } from '@angular/core';
import { BucketService } from 'src/app/services/bucket.service';
import { Observable, Subscription } from 'rxjs';
import { Bucket } from 'src/app/Bucket';

@Component({
  selector: 'app-bucket-item',
  templateUrl: './bucket-item.component.html',
  styleUrls: ['./bucket-item.component.css']
})
export class BucketItemComponent implements OnInit {
  @Input() bucket!: Bucket;
  buckets!: Bucket[];
  subscription!: Subscription;
  files!: [];

  constructor(private bucketService: BucketService) {
  }

  ngOnInit(): void {
    this.bucketService.getBuckets().subscribe((buckets) => {
      this.buckets = buckets;
    });
  }

  onDoubleClick(){
    this.bucket.show_storage = !this.bucket.show_storage;
  }

}
