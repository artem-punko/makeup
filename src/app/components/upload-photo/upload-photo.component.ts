import { Component, OnInit, DoCheck } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { CloudinaryOptions, CloudinaryUploader, CloudinaryImageComponent, CloudinaryTransforms } from 'ng2-cloudinary';
@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css'],
})

export class UploadPhotoComponent implements OnInit {
  images: any;
  page = 1;
  imageId: string;
  files;
  key = '';
  password: Boolean = false;
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'dhvqokydk', uploadPreset: 'stribuk_makeup' })
  );
  typeImage = null;

  types = [
    {
      id: 1,
      name: 'Свадебный макияж'
    },
    {
      id: 2,
      name: 'Дневной макияж'
    },
    {
      id: 3,
      name: 'Голливудский макияж'
    },
    {
      id: 4,
      name: 'Вечерний макияж'
    },
    {
      id: 5,
      name: 'Возрастной макияж'
    },
    {
      id: 6,
      name: 'Fashion-макияж'
    }
  ];

  constructor(private imageService: ImageService) {

    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      const res: any = JSON.parse(response);
      this.imageId = res.public_id;
      this.imageService.savePhoto({
        imageId: this.imageId,
        type: this.typeImage
      }).subscribe(success => {
        this.getAll();
        this.uploader.queue.shift();
      });
      return { item, response, status, headers };
    };
  }

  ngOnInit() {
    this.getAll();
  }

  upload() {
    this.uploader.uploadAll();
  }

  getAll() {
    this.imageService.getAllPhoto(this.page).subscribe(success => {
      this.images = success;
    });
  }

  delete(id, type) {
    this.imageService.deletePhoto(id, type).subscribe(success => {
      this.getAll();
    });

  }

  next() {
    if (this.images.pages < this.page + 1) {
      this.page = 1;
    } else {
      this.page = this.page + 1;
    }
    this.getAll();
  }

  back() {
    if (0 === this.page - 1) {
      this.page = this.images.pages;
    } else {
      this.page = this.page - 1;
    }
    this.getAll();
  }

}
