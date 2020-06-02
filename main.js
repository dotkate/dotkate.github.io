const button = document.querySelector('.top-menu__img');
const modalApp = document.querySelector('.apps');

const settings = document.querySelector('.push');
const modalSettings = document.querySelector('.footer__settings');

function makeDropDown(btn, popup) {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (popup.classList.contains('show')) {
      popup.classList.remove('show');
    } else {
      popup.classList.add('show');
    }
  });
  document.addEventListener('click', function(e) {
    if (popup.classList.contains('show')) {
      popup.classList.remove('show');
    }
  });
  popup.addEventListener('click', function(e) {
    e.stopPropagation();
  })
};

makeDropDown(button, modalApp);
makeDropDown(settings, modalSettings);

const cross = document.querySelector('.search-body__clear-btn');
const search = document.querySelector('.search-body__input');

search.addEventListener('input', function(event) {
  if (event.target.value.length > 0) {
    cross.classList.remove('hide');
  } else {
    cross.classList.add('hide');
  }
});

cross.addEventListener('click', function() {
  search.value = '';
  cross.classList.add('hide');
});
