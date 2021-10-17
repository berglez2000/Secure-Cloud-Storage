import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { BucketService } from 'src/app/services/bucket.service'; 
import { Bucket } from 'src/app/Bucket';

@Component({
  selector: 'app-add-bucket',
  templateUrl: './add-bucket.component.html',
  styleUrls: ['./add-bucket.component.css']
})
export class AddBucketComponent implements OnInit {
  @Output() onAddBucket: EventEmitter<Bucket> = new EventEmitter();
  buckets: Bucket[] = []; 
  name: string = '';
  location: string = '';
  showAddBucket: boolean = false;
  subscription!: Subscription;


  constructor(private bucketService: BucketService, private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddBucket = value);
  }

  ngOnInit(): void {
    this.bucketService.getBuckets().subscribe((buckets) => (this.buckets = buckets));
  }

  onSubmit(){
    if(!this.name){
      return alert('Please add Bucket Name');
    } else if(!this.location){
      return alert('Please add Bucket Location');
    }

    const newBucket = {
      name: this.name,
      location: this.location,
      show_storage: false,
      files: []
    };

    // Dodaj v db.json
    this.bucketService.addBucket(newBucket).subscribe((bucket) => {
      this.buckets.push(bucket);
      location.reload();
    });


    this.name = '';
    this.location = '';
  }

}
