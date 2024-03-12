const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';
let info = { email: '', message: '' };

form.addEventListener('input', handleInput);

function handleInput(evt) {
  info.email = form.elements.email.value.trim();
  info.message = form.elements.message.value.trim();

  localStorage.setItem(LS_KEY, JSON.stringify(info));
}

//const jsn = localStorage.getItem(LS_KEY);

const dataLs = JSON.parse(localStorage.getItem(LS_KEY));

if (dataLs !== null) {
  form.elements.email.value = dataLs.email;
  form.elements.message.value = dataLs.message;

  info = dataLs;
}

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (info.email.length === 0 || info.message.length === 0) {
    alert('All form fields must be filled in');
    return;
  } else {
    console.log(info);
  }
  localStorage.removeItem(LS_KEY);
  form.reset();
});
