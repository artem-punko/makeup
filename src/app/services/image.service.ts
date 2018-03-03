import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService {

  result: any;

  constructor(private http: HttpClient) { }

  getPhotoByType(type, page) {
    return this.http.get('/image/' + type + '/' + page);
  }

  getAllPhoto(page) {
    return this.http.get('/image/' + page);
  }

  savePhoto(image) {
    return this.http.post('/image', image);
  }

  deletePhoto(id, type) {
    return this.http.delete('/image/' + id + '/' + type);
  }
}
