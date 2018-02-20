import { Component, OnInit, DoCheck } from '@angular/core';
import { DataService } from '../services/data.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css'],
})

export class UploadPhotoComponent implements DoCheck {
  public uploader: FileUploader = new FileUploader({
    url: '/upload',
    additionalParameter: {
      typeCollection: 'all'
    }
  });


  ngDoCheck() {
    console.log(this.uploader)
  }


}
