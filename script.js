const inputFirstName = document.querySelector('#first-name');
const inputLastName = document.querySelector('#last-name');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const btn = document.querySelector('button');
const inputArray = document.querySelectorAll('input');
const inputContainer = document.querySelectorAll('.input-container');

const validation = function () {
  const regEx = /^\S+@\S+\.\S+$/;

  if (regEx.test(inputEmail.value)) {
    console.log('true');
  } else {
    const element = inputEmail;
    const error = document.createElement('span');

    element.classList.add('error-input');
    error.innerHTML = `the ${inputEmail.placeholder} is not valid`;
    error.classList.add(`${element.id}js`);

    if (!inputContainer[2].querySelector(`.${element.id}js`)) {
      inputContainer[2].append(error);
    }
  }
};

const clickHandler = function () {
  let empty = true;
  for (let i = 0; i < inputArray.length; i++) {
    const element = inputArray[i];
    const error = document.createElement('span');

    if (!element.value) {
      element.classList.add('error-input');
      error.innerHTML = `the ${element.placeholder} is required`;
      error.classList.add(`${element.id}js`);

      if (!inputContainer[i].querySelector(`.${element.id}js`)) {
        inputContainer[i].append(error);
      }
    } else if (element.value) {
      element.classList.remove('error-input');

      if (inputContainer[i].querySelector(`span`)) {
        inputContainer[i].removeChild(
          document.querySelector(`.${element.id}js`)
        );
      }
      element.classList.add('not-error-input');
    }
  }
};

btn.addEventListener('click', clickHandler);
btn.addEventListener('click', validation);
btn.addEventListener('click', (event) => {
  event.preventDefault();
});
