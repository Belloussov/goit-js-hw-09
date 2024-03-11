const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';
let info = { email: '', message: '' };

form.addEventListener('input', handleInput);

function handleInput(evt) {
  evt.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  info.email = email;
  info.message = message;

  localStorage.setItem(LS_KEY, JSON.stringify(info));
}

const jsn = localStorage.getItem(LS_KEY);

const dataLs = JSON.parse(jsn);
if (dataLs !== null) {
  form.elements.email.value = dataLs.email;
  form.elements.message.value = dataLs.message;
}

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (info.email === '' || info.message === '') {
    alert('All form fields must be filled in');
    return;
  } else {
    console.log(info);
  }
  localStorage.removeItem(LS_KEY);
  form.reset();
});
