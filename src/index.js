import _ from 'lodash';
import DOMController from './DomStuff.js';
import './assets/css/main.scss';
import image from './assets/img/pic1.jpg';

DOMController.loadSliderImages(0);
DOMController.eventListeners();
setInterval(() => {
  DOMController.nextSlide();
}, 5000);