import _ from 'lodash';
import './assets/css/main.scss';
import image from './assets/img/pic1.jpg';

function render() {
  const img = new Image();
  img.src = image;
  const element = document.createElement('div');
  element.appendChild(img);
  return element
}


document.body.appendChild(render());