import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
console.log(form);

form.addEventListener('submit', submitBtn);

function submitBtn(event) {
  event.preventDefault();
  const input = document.querySelector('input[name="delay"]');
  const delay = Number(input.value);

  const radioBtn = document.querySelector('input[name="state"]:checked');
  console.log(radioBtn.value);

  const promiseNotification = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioBtn.value === 'fulfilled') {
        // resolve(`✅ Fulfilled promise in ${delay}ms`);
        resolve(
          iziToast.success({
            message: `Fulfilled promise in ${delay}ms`,
            messageColor: '#FFFFFF',
            timeout: delay,
            position: 'topRight',
            color: '#59A10D',
          })
        );
      } else {
        // reject(`❌ Rejected promise in ${delay}ms`);
        reject(
          iziToast.error({
            message: `Rejected promise in ${delay}ms`,
            messageColor: '#FFFFFF',
            timeout: delay,
            position: 'topRight',
            color: '#EF4040',
          })
        );
      }
    }, delay);
  });
  console.log(promiseNotification);

  /*   In case of the library`s absence */
  promiseNotification
    .then(value => {
      console.log(value);
    })
    .catch(error => {
      console.log(error);
    });
  form.reset();
}
