const btnInputEl = document.querySelector('#btn-input');
const btnDismissEl = document.querySelector('#btn-dismiss');
const fromContainerEl = document.querySelector('#from-container');
const thankYouEl = document.querySelector('.thank-you');
const inputEl = document.querySelector('#input');

btnInputEl.addEventListener('click', function (event) {
  event.preventDefault();
  if (inputEl.value !== '') {
    fromContainerEl.classList.add('hide');
    thankYouEl.classList.remove('hide');
  } else {
    document.querySelector('.');
  }
});

btnDismissEl.addEventListener('click', function () {
  thankYouEl.classList.add('hide');
  fromContainerEl.classList.remove('hide');
});
