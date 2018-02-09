import {Component, OnInit} from '@angular/core';
import { Gallery} from 'ng-gallery';

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

  images = [
    {
      src: '../assets/1.jpg',
      thumbnail: '../assets/1.jpg',
      text: 'See Sunset View'
    },
    {
      src: '../assets/1.jpg',
      thumbnail: '../assets/1.jpg',
      text: 'See Sunset View'
    },
    {
      src: '../assets/1.jpg',
      thumbnail: '../assets/1.jpg',
      text: 'See Sunset View'
    },
    {
      src: '../assets/1.jpg',
      thumbnail: '../assets/1.jpg',
      text: 'See Sunset View'
    },
    {
      src: '../assets/1.jpg',
      thumbnail: '../assets/1.jpg',
      text: 'See Sunset View'
    },
    {
      src: '../assets/1.jpg',
      thumbnail: '../assets/1.jpg',
      text: 'See Sunset View'
    },
    {
      src: '../assets/1.jpg',
      thumbnail: '../assets/1.jpg',
      text: 'See Sunset View'
    },
    {
      src: '../assets/1.jpg',
      thumbnail: '../assets/1.jpg',
      text: 'See Sunset View'
    },
    {
      src: '../assets/1.jpg',
      thumbnail: '../assets/1.jpg',
      text: 'See Sunset View'
    },
    {
      src: '../assets/1.jpg',
      thumbnail: '../assets/1.jpg',
      text: 'See Sunset View'
    }
  ];

  constructor(public gallery: Gallery) {}

  ngOnInit() {
    this.gallery.load(this.images);

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
      'tg://resolve?domain=artem_punko');
  }

  phoneEvent(event) {
    this.phone = event;
  }

  phoneEventOut(event) {
    this.phone = false;
  }

  clickPhone() {
    document.getElementById('mymailto').click();
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

  skypeEvent(event) {
    this.skype = event;
  }

  skypeEventOut(event) {
    this.skype = false;
  }

  clickSkype() {
    window.open(
      'skype:zasranka2497');
  }
}
