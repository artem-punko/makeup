import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ImageService } from './services/image.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  inst = false;
  viber = false;
  telegram = false;
  phone = false;
  vk = false;
  skype = false;
  left = false;
  right = false;
  plus = false;
  image: any;
  type = 0;
  phoneNumber = '';

  public options = {
    position: ['top', 'center'],
    timeOut: 3000,
    lastOnBottom: true
  }

  constructor(
    private router: Router,
    private imageService: ImageService,
    private _service: NotificationsService
  ) { }

  ngOnInit() {
  }

  mouseWheelUpFunc(event) {
    this.type = 1;
    this.router.navigate(['/profile']);
  }

  mouseWheelDownFunc(event) {
    this.type = 2;
    this.router.navigate(['/gallery']);
  }

  plusEvent(event) {
    this.plus = event;
  }

  plusEventOut(event) {
    this.plus = false;
  }

  clickToImage(image) {
    this.image = image
  }


  leftEvent(event) {
    this.left = event;
  }

  leftEventOut(event) {
    this.left = false;
  }

  rightEvent(event) {
    this.right = event;
  }

  rightEventOut(event) {
    this.right = false;
  }

  instEvent(event) {
    this.inst = event;
  }

  instEventOut(event) {
    this.inst = false;
  }

  clickInst() {
    window.open(
      'http://www.instagram.com/stribuk_make_up/', '_blank').focus();
  }

  vkEvent(event) {
    this.vk = event;
  }

  vkEventOut(event) {
    this.vk = false;
  }

  clickVk() {
    window.open(
      'https://vk.com/stribuk_make_up', '_blank').focus();
  }

  telegramEvent(event) {
    this.telegram = event;
  }

  telegramEventOut(event) {
    this.telegram = false;
  }

  clickTelegram() {
    window.open(
      'tg://resolve?domain=stribuk_mua');
  }

  phoneEvent(event) {
    this.phone = event;
  }

  phoneEventOut(event) {
    this.phone = false;
  }

  viberEvent(event) {
    this.viber = event;
  }

  viberEventOut(event) {
    this.viber = false;
  }

  clickViber() {
    window.open(
      'viber://add?number=%2B375292762060');
  }

  setType(type) {
    this.type = type;
    if (this.type === 3) {
      $('#modalTrigger').click();
    }
  }

  sendMessageToVk() {
    this.imageService.sendMessageToVk(this.phoneNumber).subscribe(success => {
      this._service.error('Спасибо', 'Сообщение отправлено', {
        timeOut: 3000,
        showProgressBar: false,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 10
      });
    }, error => {
      this._service.error('Извините', 'Произошла ошибка', {
        timeOut: 3000,
        showProgressBar: false,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 10
      });
    });
  }
}
