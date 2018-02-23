import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

class Image {
  products: Array<any>;
  pages: Number;
  current: Number; 
};

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'dhvqokydk', uploadPreset: 'stribuk_makeup' })
  );
  images: any;
  type = 0;
  page = 1;
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = new Image();
    this.getAll();
  } 

  next() {
    if (this.images.pages < this.page + 1) {
      this.page = 1;
    } else {
      this.page = this.page + 1;
    }
    if (this.type == 0) {
      this.getAll();
    } else {
      this.getByType()
    }
  }

  back() {
    if (0 == this.page - 1) {
      this.page = this.images.pages;
    } else {
      this.page = this.page - 1;
    }
    if (this.type == 0) {
      this.getAll();
    } else {
      this.getByType()
    }
  }

  selectCategory(type) {
    this.page = 1;
    this.type = type;
    if (this.type == 0) {
      this.getAll();
    } else {
      this.getByType()
    }
  }

  getByType() {
    this.imageService.getPhotoByType(this.type, this.page).subscribe(success => {
      this.images = success;
      console.log(success)
    });
  }

  getAll() {
    this.imageService.getAllPhoto(this.page).subscribe(success => {
      this.images = success;
    });
  }

}
