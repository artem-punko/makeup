import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css', 'app-mobile.component.css']
})
export class AppComponent {
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
  images = [
    {
      src: '../assets/11.jpg',
      thumbnail: '../assets/11.jpg',
      text: 'See Sunset View'
    },
    {
      src: '../assets/11.jpg',
      thumbnail: '../assets/11.jpg',
      text: 'See Sunset View'
    },
    {
      src: '../assets/11.jpg',
      thumbnail: '../assets/11.jpg',
      text: 'See Sunset View'
    },
    {
      src: '../assets/11.jpg',
      thumbnail: '../assets/11.jpg',
      text: 'See Sunset View'
    },
    {
      src: '../assets/11.jpg',
      thumbnail: '../assets/11.jpg',
      text: 'See Sunset View'
    }
  ];

  mouseWheelDir: String = '';

  mouseWheelUpFunc() {
    this.type = 1;
    this.router.navigate(['/profile']);
  }

  mouseWheelDownFunc() {
    this.type = 2;
    this.router.navigate(['/gallery']);
  }

  constructor(private router: Router) { }


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
  }
}
