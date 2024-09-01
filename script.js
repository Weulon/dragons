document.addEventListener('DOMContentLoaded', function() {
    // Пример функции нажатия кнопки
    const buttons = document.querySelectorAll('.menu-button, .social-button');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        alert(`Вы нажали на кнопку: ${this.querySelector('span').textContent}`);
      });
    });
  });
  