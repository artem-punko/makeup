import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

  result: any;

  constructor(private http: HttpClient) { }

  getPhotoByType(type) {
    return this.http.get('/image/' + type);
  }

  savePhoto(image) {
    return this.http.post('/image/', image);
  }

}
