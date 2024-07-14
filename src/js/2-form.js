const formData = {
  email: '',
  message: '',
};

function saveToLocalStorage(data) {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem('feedback-form-state');
  return savedData ? JSON.parse(savedData) : null;
}

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

document.addEventListener('DOMContentLoaded', () => {
  const savedData = loadFromLocalStorage();
  if (savedData) {
    formData.email = savedData.email;
    formData.message = savedData.message;
    emailInput.value = savedData.email;
    messageInput.value = savedData.message;
  }
});

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveToLocalStorage(formData);
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
