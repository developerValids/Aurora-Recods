/*===============PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) => {
   const input = document.getElementById(loginPass),
      iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () => {
      if (input.type === 'password') {
         input.type = 'text'

         iconEye.classList.add('ri-eye-line')
         iconEye.classList.remove('ri-eye-off-line')
      } else {
         input.type = 'password'

         iconEye.classList.remove('ri-eye-line')
         iconEye.classList.add('ri-eye-off-line')
      }
   })
}

showHiddenPass('login-pass', 'login-eye')


const form = document.querySelector('.login__form');

form.addEventListener('submit', (event) => {
   const loginInput = document.getElementById('login-email');
   const discordInput = document.getElementById('discord-email');
   const hwidInput = document.getElementById('login-pass');

   if (loginInput.value === '') {
      event.preventDefault();
      alert('Введите ваш Login');
   }

   if (loginInput.value === '') {
      event.preventDefault(); 
      alert('Введите ваш Discord');
   }

   if (hwidInput.value === '') {
      event.preventDefault(); 
      alert('Введите ваш HWID');
   } else {
      alert('Ждите подтверждение хвида');
   }
});