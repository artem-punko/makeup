import { Component, OnInit, DoCheck } from '@angular/core';
import { ImageService } from '../services/image.service';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css'],
})

export class UploadPhotoComponent {

  imageId: string;
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
      console.log(res)
      this.imageService.savePhoto({
        imageId: this.imageId,
        type: this.typeImage
      }).subscribe();
      return { item, response, status, headers };
    };
  }

  upload() {
    this.uploader.uploadAll();
  }
}
