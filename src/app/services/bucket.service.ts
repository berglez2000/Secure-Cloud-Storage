import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bucket } from '../Bucket';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  private apiUrl = 'http://localhost:5000/buckets';
  private fileUrl = 'http://localhost:5000/files';

  constructor(private http:HttpClient) { }

  getBuckets(): Observable<Bucket[]>{
    return this.http.get<Bucket[]>(this.apiUrl);
  }

  getFiles(id: any){
    return this.http.get(`${this.fileUrl}?bucket_id=${id}`);
  }

  addBucket(bucket: Bucket):Observable<Bucket>{
    return this.http.post<Bucket>(this.apiUrl, bucket, httpOptions);
  }

  uploadFile(file: any): Observable<any>{
    return this.http.post(this.fileUrl, file, httpOptions);
  }

  deleteFile(file: any): Observable<any>{
    const url = `${this.fileUrl}/${file.id}`;
    return this.http.delete(url);
  }

  deleteBucket(bucket: Bucket): Observable<Bucket>{
    const url = `${this.apiUrl}/${bucket.id}`;
    return this.http.delete<Bucket>(url);
  }
}
