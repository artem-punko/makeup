import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService {
  // user_id: Number
  result: any;

  constructor(private http: HttpClient) { }

  // getPhotoByType(type, page) {
  //   return this.http.get('http://localhost:3001/image/' + type + '/' + page);
  // }

  // getAllPhoto(page) {
  //   return this.http.get('http://localhost:3001/image/' + page);
  // }

  // savePhoto(image) {
  //   return this.http.post('http://localhost:3001/image', image);
  // }

  // deletePhoto(id, type) {
  //   return this.http.delete('http://localhost:3001/image/' + id + '/' + type);
  // }

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


  sendMessageToVk(message) {
    let telegram;
    telegram = {
      token: '518727334:AAFAQvh0wD2ypSMg7SQS6luTN-LXA5Zq5j8',
      chat: '-298625427'
    }
    return this.http.get('https://api.telegram.org/bot' +
    telegram.token +
    '/sendMessage?chat_id=' +
    telegram.chat + '&parse_mode=html&text=Я ваш клиент, перезвоните мне: ' +
    message);
  }
}
