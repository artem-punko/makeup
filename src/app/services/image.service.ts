import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService {

  result: any;

  constructor(private http: HttpClient) { }

  getPhotoByType(type, page) {
    return this.http.get('http://localhost:3001/image/' + type + '/' + page);
  }

  getAllPhoto(page) {
    return this.http.get('http://localhost:3001/image/' + page);
  }

  savePhoto(image) {
    return this.http.post('http://localhost:3001/image', image);
  }

  deletePhoto(id) {
    return this.http.delete('http://localhost:3001/image/' + id);

  }

}
