import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

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
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getAll();
  }

  getByType(type) {
    this.imageService.getPhotoByType(type).subscribe( success => {
      this.images = success;
    });
  }

  getAll() {
    this.imageService.getAllPhoto().subscribe( success => {
      this.images = success;
    });
  }

}
