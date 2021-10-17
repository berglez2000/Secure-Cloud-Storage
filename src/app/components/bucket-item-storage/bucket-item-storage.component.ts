import { Component, OnInit, Input } from '@angular/core';
import { BucketService } from 'src/app/services/bucket.service';
import { Bucket } from 'src/app/Bucket';

@Component({
  selector: 'app-bucket-item-storage',
  templateUrl: './bucket-item-storage.component.html',
  styleUrls: ['./bucket-item-storage.component.css']
})
export class BucketItemStorageComponent implements OnInit {
  @Input() bucket!: Bucket;
  showDetails: boolean = false;
  files!: any;
  filesLen!: string;
  showFiles: boolean = true;

  constructor(private bucektService: BucketService) {
  }

  ngOnInit(): void {
    this.bucektService.getFiles(this.bucket.id).subscribe((values) => {
      const value = Object.values(values);
      this.files = value;
      
      if(value.length > 0){
        this.filesLen = `All Files (${value.length})`;
        this.showFiles = true;
      } else {
        this.filesLen = "Empty Bucket";
        this.showFiles = false;
      }
    });
  }
  
  openFiles(){
    this.showDetails = false;
  }

  openDetails(){
    this.showDetails = true;
  }

  onFileUpload(event: any){
    const fileInfo: any = event.target.files[0];
    console.log(fileInfo);
    const newFile = {
      bucket_id: this.bucket.id,
      last_modified: fileInfo.lastModified,
      filename: fileInfo.name,
      size: fileInfo.size
    }

    this.bucektService.uploadFile(newFile).subscribe(() => {
      location.reload();
    });
  }

  onDeleteFile(file: any){
    this.bucektService.deleteFile(file).subscribe();
    location.reload();
  }

  onDeleteBucket(){
    this.bucektService.deleteBucket(this.bucket).subscribe(() => {
      this.bucket.id !== this.bucket.id;
      location.reload();
    });
  }
}
