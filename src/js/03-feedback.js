const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const formData = {};

const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  console.log(formData);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  localStorage.removeItem(STORAGE_KEY);

  formRef.reset();

  console.log('formData При САБМИТЕ', formData);
}

function populateForm() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    return;
  }

  const savedFromData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const keys = Object.keys(savedFromData);

  for (const key of keys) {
    formData[key] = savedFromData[key];

    formRef.elements[key].value = savedFromData[key];
  }
}
