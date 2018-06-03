// DEBUT DU JS

// création des variables du slider
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
let marginLeft = 0;
let index = 0;
const lastSlide = $('.sliders li').length - 1;
let sizeSlider = document.querySelector('.conteneur_sliders').getBoundingClientRect().width;


//création de l'événement des variables
previousButton.addEventListener('click', function () {
  previous();
});

nextButton.addEventListener('click', function () {
  next();
});

// On redéfinit la taille du slider ainsi que sa position lorsque l'on redimensionne la page
window.addEventListener('resize', () => {
  sizeSlider = document.querySelector('.conteneur_sliders').getBoundingClientRect().width;
  marginLeft = -(index * sizeSlider);
  $('.sliders').css('transform', `translateX(${marginLeft}px)`);
});


//FONCTION DES DEUX ICONS POUR LE SLIDERS
function previous() {
  if (index === 0) {
    marginLeft = -(sizeSlider * lastSlide);
    index = lastSlide;
  } else {
    index = index - 1;
    marginLeft = marginLeft + sizeSlider;
  }

  $('.sliders').css('transform', `translateX(${marginLeft}px)`);
}

function next() {
  if (index === lastSlide) {
    marginLeft = 0;
    index = 0;
  } else {
    marginLeft = marginLeft - sizeSlider;
    index = index + 1;
  }

  $('.sliders').css('transform', `translateX(${marginLeft}px)`);
}


// TOUCHES CLAVIERS POUR LE SLIDER

document.addEventListener("keydown", function (e) {

  if (e.keyCode === 37) {
    previous();
  }
  else if (e.keyCode === 39) {
    next();
  }
})

