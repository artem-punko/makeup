import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {
  images: any;
  formData = new FormData();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(success => {
      console.log(success)
    })
  }

  uploadHandler(event) {
    this.images = event.files;
    console.log(this.images);
  }

  sendNewStatus() {
    for (const image of this.images) {
      this.formData.append('images', image);
    }
    this.dataService.savePhoto(this.images).subscribe();
  }
}
