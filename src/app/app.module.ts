import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BucketListComponent } from './components/bucket-list/bucket-list.component';
import { ButtonComponent } from './components/button/button.component';
import { BucketItemComponent } from './components/bucket-item/bucket-item.component';
import { AddBucketComponent } from './components/add-bucket/add-bucket.component';
import { TitleComponent } from './components/title/title.component';
import { BucketsContainerComponent } from './components/buckets-container/buckets-container.component';
import { BucketItemStorageComponent } from './components/bucket-item-storage/bucket-item-storage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StorageFileComponent } from './components/storage-file/storage-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BucketListComponent,
    ButtonComponent,
    BucketItemComponent,
    AddBucketComponent,
    TitleComponent,
    BucketsContainerComponent,
    BucketItemStorageComponent,
    StorageFileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
