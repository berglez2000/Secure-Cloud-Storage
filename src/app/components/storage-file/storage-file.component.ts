import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faFileAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-storage-file',
  templateUrl: './storage-file.component.html',
  styleUrls: ['./storage-file.component.css']
})
export class StorageFileComponent implements OnInit {
  @Input() file!: any;
  @Output() onFileDelete: EventEmitter<any> = new EventEmitter;
  lastModified: any = '';
  size: any;
  faFileAlt = faFileAlt;
  faTrashAlt = faTrashAlt;

  constructor() {
  }

  ngOnInit(): void {
    const date = new Date(this.file.last_modified);
    this.lastModified = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
    this.size = this.bytes(this.file.size, 0);
  }

  onClick(){
    this.onFileDelete.emit(this.file);
  }

  bytes(bytes: any, decimals: any){
    if(bytes == 0) return '0 Bytes';
    var k = 1024,
    dm = decimals || 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
