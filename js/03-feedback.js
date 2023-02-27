import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    email:document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onTextareaEmail, 500));
refs.textarea.addEventListener('textarea', throttle(onTextareaInput, 500));

populateTextarea();
populateEmail();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaEmail(evt) {
    const email = evt.target.value;

    localStorage.setItem(STORAGE_KEY, email);
}

function onTextareaInput(evt) {
    const message = evt.target.value;

    localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if(savedMessage) {
        refs.textarea.value = savedMessage;
    }
}

function populateEmail() {
    const savedEmail = localStorage.getItem(STORAGE_KEY);

    if(savedEmail) {
        refs.email.value = savedEmail;
    }
}