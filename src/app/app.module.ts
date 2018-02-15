import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import {FileUploadModule} from 'primeng/fileupload';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'upload',
    component: UploadPhotoComponent
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
    FileUploadModule,
    BrowserModule,
    rootRouting,
    HttpModule,
    BrowserAnimationsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
