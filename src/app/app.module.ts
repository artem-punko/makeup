import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ImageService } from './services/image.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
// import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'upload',
    component: UploadPhotoComponent
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }
], {});

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ProfileComponent,
    UploadPhotoComponent
  ],
  imports: [
    HttpClientModule ,
    FormsModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    BrowserModule,
    rootRouting,
    HttpModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
