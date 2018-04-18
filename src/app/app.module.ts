// imports
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
import { SimpleNotificationsModule } from 'angular2-notifications';
import 'hammerjs';
// components
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';

// services
import { ImageService } from './services/image.service';

// directives
import { MouseWheelDirective } from './directives/mousewheel.directive';

// routing
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
    UploadPhotoComponent,
    MouseWheelDirective
  ],
  imports: [
    FileUploadModule,
    HttpClientModule,
    FormsModule,
    Ng2CloudinaryModule,
    BrowserModule,
    rootRouting,
    HttpModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
