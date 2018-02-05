import {Component, ViewChild} from '@angular/core';
import {GALLERY_CONF, GALLERY_IMAGE, NgxImageGalleryComponent} from 'ngx-image-gallery';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  public showConf: boolean = true;

  @ViewChild('ngxImageGallery') ngxImageGallery: NgxImageGalleryComponent;

  title = 'Demo App';

  // gallery configuration
  conf: GALLERY_CONF = DEMO_GALLERY_CONF_INLINE;

  // gallery images
  images: GALLERY_IMAGE[] = DEMO_GALLERY_IMAGE;

  // METHODS
  // open gallery
  openGallery(index: number = 0) {
    // console.log(this.ngxImageGallery);
    // this.ngxImageGallery.open(index);
  }

  // close gallery
  closeGallery() {
    // this.ngxImageGallery.close();
  }

  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    // this.ngxImageGallery.setActiveImage(index);
  }

  // next image in gallery
  nextImage() {
    this.ngxImageGallery.next();
  }

  // prev image in gallery
  prevImage() {
    this.ngxImageGallery.prev();
  }

  /**************************************************/

  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
    // console.info('Gallery opened at index ', index);
  }

  // callback on gallery closed
  galleryClosed() {
    // console.info('Gallery closed.');
  }

  // callback on gallery image clicked
  galleryImageClicked(index) {
    // console.info('Gallery image clicked with index ', index);
    // this.ngxImageGallery.open(index);
  }

  // callback on gallery image changed
  galleryImageChanged(index) {
    // console.info('Gallery image changed to index ', index);
  }

  // callback on user clicked delete button
  deleteImage(index) {
    // console.info('Delete image at index ', index);
  }

}

export const DEMO_GALLERY_CONF_INLINE: GALLERY_CONF = {
  imageOffset: '0px',
  imagePointer: true,
  showDeleteControl: false,
  showCloseControl: false,
  showExtUrlControl: false,
  closeOnEsc: true,
  showImageTitle: false,
  inline: true,
  backdropColor: 'default'
};

export const DEMO_GALLERY_CONF: GALLERY_CONF = {
  imageOffset: '0px',
  showDeleteControl: false,
  showCloseControl: true,
  showImageTitle: false,
  inline: false,
  backdropColor: 'rgba(13,13,14,0.85)'
};

// gallery images
export const DEMO_GALLERY_IMAGE: GALLERY_IMAGE[] = [
  {
    url: 'https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=1260',
    altText: 'woman-in-black-blazer-holding-blue-cup',
    title: 'woman-in-black-blazer-holding-blue-cup',
    thumbnailUrl: 'https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=60'
  },
  {
    url: 'https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=1260',
    altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain',
    extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
    thumbnailUrl: 'https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=60'
  },
];