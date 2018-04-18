import { Component, OnInit, HostListener } from '@angular/core';
import { ImageService } from '../../services/image.service';
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
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'dhvqokydk', uploadPreset: 'stribuk_makeup' })
  );
  images: any;
  type = 0;
  page = 1;
  selectedImage = -2;
  left = false;
  right = false;
  close = false;
  constructor(private imageService: ImageService) { }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e) {
    if (e.keyCode === 37) {
      this.left = true;
    } else if (e.keyCode === 39) {
      this.right = true;
    } else if (e.keyCode === 27) {
      this.close = true;
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(e) {
    if (e.keyCode === 37 || this.left === true) {
      this.backSelected();
      this.left = false;
    } else if (e.keyCode === 39 || this.right === true) {
      this.nextSelected();
      this.right = false;
    } else if (e.keyCode === 27 || this.close === true) {
      this.cross();
      this.close = false;
    }
  }

  ngOnInit() {
    this.images = new Image();
    this.getAll();
  }

  swipe( action) {
    if (action === this.SWIPE_ACTION.RIGHT) {
      this.backSelected();
    }

    if (action === this.SWIPE_ACTION.LEFT) {
      this.nextSelected();
    }
  }

  next() {
    if (this.images.pages < this.page + 1) {
      this.page = 1;
    } else {
      this.page = this.page + 1;
    }
    if (this.type === 0) {
      this.getAll();
    } else {
      this.getByType()
    }
  }

  back() {
    if (0 === this.page - 1) {
      this.page = this.images.pages;
    } else {
      this.page = this.page - 1;
    }
    if (this.type === 0) {
      this.getAll();
    } else {
      this.getByType()
    }
  }

  backSelected() {
    const selectedImage = this.selectedImage - 1;
    if (selectedImage < 0) {
      this.selectedImage = this.images.products.length - 1;
    } else {
      this.selectedImage = selectedImage;
    }
  }

  nextSelected() {
    const selectedImage = this.selectedImage + 1;
    if (selectedImage === this.images.products.length) {
      this.selectedImage = 0;
    } else {
      this.selectedImage = selectedImage;
    }
  }

  selectCategory(type) {
    this.page = 1;
    this.type = type;
    if (this.type === 0) {
      this.getAll();
    } else {
      this.getByType()
    }
  }

  getByType() {
    this.imageService.getPhotoByType(this.type, this.page).subscribe(success => {
      this.images = success;
    });
  }

  getAll() {
    this.imageService.getAllPhoto(this.page).subscribe(success => {
      this.images = success;
    });
  }

  selectImage(image) {
    this.selectedImage = image;
  }

  cross() {
    this.selectedImage = -2;
  }
}
