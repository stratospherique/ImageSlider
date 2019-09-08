const DOMController = (() => {
  const resources = [require('./assets/img/pic1.jpg'), require('./assets/img/pic2.jpg'), require('./assets/img/pic3.jpg'), require('./assets/img/pic4.jpg')];
  const images = () => {
    const img1 = new Image();
    const div1 = document.createElement('div');
    img1.src = resources[0];
    div1.addEventListener('click', () => updateSlide(0));
    img1.classList.add('imgs');
    div1.appendChild(img1);
    const img2 = new Image();
    const div2 = document.createElement('div');
    img2.src = resources[1];
    div2.addEventListener('click', () => updateSlide(1));
    img2.classList.add('imgs');
    div2.appendChild(img2);
    const img3 = new Image();
    const div3 = document.createElement('div');
    img3.src = resources[2];
    div3.addEventListener('click', () => updateSlide(2));
    img3.classList.add('imgs');
    div3.appendChild(img3);
    const img4 = new Image();
    const div4 = document.createElement('div');
    img4.src = resources[3];
    div4.addEventListener('click', () => updateSlide(3));
    img4.classList.add('imgs');
    div4.appendChild(img4);
    return [div1, div2, div3, div4];
  }
  const mainSlide = document.querySelector('.slide');
  const slider = document.querySelector('.slider');
  const forward = document.querySelector('.forward');
  const back = document.querySelector('.back');
  let currentIndex = 0;
  const autoBtn = document.querySelector('.auto-button');
  let autoStatus = true;
  let manualStatus = false;

  const loadSliderImages = (index = 0) => {
    currentIndex = index;
    images().forEach((img) => {
      slider.appendChild(img);
    });
    const extracted = images()[index].querySelector('img');
    console.log(extracted);
    loadMainSlide(extracted);
    updateSlide();
    playerAuto();
  };

  const loadMainSlide = (pic) => {
    mainSlide.appendChild(pic);
  }

  const eventListeners = () => {
    forward.addEventListener('mousedown', () => {
      manualStatus = true;
      nextSlide();
    });
    forward.addEventListener('mouseup', () => {
      manualStatus = false;
    });
    back.addEventListener('mousedown', () => {
      manualStatus = true;
      previousSlide();
    });
    back.addEventListener('mouseup', () => {
      manualStatus = false;
    });
  }

  const updateSlide = (index) => {
    if (!!(index + 1)) {
      currentIndex = index;
    }
    mainSlide.innerHTML = "";
    mainSlide.appendChild(images()[currentIndex].querySelector('img'));
    slider.classList.value = "slider";
    slider.classList.add(`slide-${currentIndex}`);
    slider.querySelectorAll('div').forEach((img, i) => {
      if (i === currentIndex) {
        img.classList.add('selected');
      } else {
        img.classList.remove('selected');
      }
    });
  };

  const nextSlide = () => {
    if (autoStatus || manualStatus) {
      currentIndex += 1;
      if (currentIndex > 3) {
        currentIndex = 0;
      }
      updateSlide();
    };
  }

  const previousSlide = () => {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = 3;
    }
    updateSlide();
  }

  const autoplayToggler = () => {
    autoStatus = !autoStatus;
    autoBtn.querySelector('div').classList.toggle('no-play');
  }

  const playerAuto = () => {
    autoBtn.addEventListener('click', autoplayToggler);
  }


  return {
    loadSliderImages,
    eventListeners,
    nextSlide
  }
})();

export {
  DOMController as
  default
}