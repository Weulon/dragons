// script.js

document.addEventListener('DOMContentLoaded', function() {
    const breedButton = document.getElementById('breedButton');
    const incubatorButton = document.getElementById('incubatorButton');
    const myDragonsButton = document.getElementById('myDragonsButton');
    const backToMainButton = document.getElementById('backToMainButton');
    const backToMainFromIncubator = document.getElementById('backToMainFromIncubator');
  
    const mainMenu = document.querySelector('.main-menu');
    const myDragonsMenu = document.getElementById('myDragonsMenu');
    const incubatorMenu = document.getElementById('incubatorMenu');
  
    const dragon1 = document.getElementById('dragon1');
    const dragon2 = document.getElementById('dragon2');
    const dragon3 = document.getElementById('dragon3');
    const egg = document.getElementById('egg');
    const eggImage = document.getElementById('eggImage');
    const eggTimer = document.getElementById('eggTimer');
  
    // Показать меню "Мои драконы"
    myDragonsButton.addEventListener('click', function() {
      mainMenu.style.display = 'none';
      myDragonsMenu.style.display = 'flex'; // изменяем на flex
    });
  
    // Возврат в главное меню из "Мои драконы"
    backToMainButton.addEventListener('click', function() {
      myDragonsMenu.style.display = 'none';
      mainMenu.style.display = 'flex'; // изменяем на flex
    });
  
    // Возврат в главное меню из "Инкубатор"
    backToMainFromIncubator.addEventListener('click', function() {
      incubatorMenu.style.display = 'none';
      mainMenu.style.display = 'flex'; // изменяем на flex
    });
  
    // Логика скрещивания драконов
    breedButton.addEventListener('click', function() {
      if (dragon1.style.display !== 'none' && dragon2.style.display !== 'none') {
        alert('Скрещивание драконов началось!');
        
        // Показать анимацию обратного отсчета на вкладке "Мои драконы"
        myDragonsButton.click();
        let countdown = 5;
        const countdownInterval = setInterval(() => {
          myDragonsMenu.querySelector('h2').textContent = `Скрещивание... (${countdown} секунд)`;
          countdown--;
  
          if (countdown < 0) {
            clearInterval(countdownInterval);
            myDragonsMenu.querySelector('h2').textContent = 'Мои драконы';
            egg.style.display = 'block';
            dragon1.style.display = 'block';
            dragon2.style.display = 'block';
            alert('Яйцо было помещено в инкубатор!');
          }
        }, 1000);
  
        dragon1.style.display = 'none';
        dragon2.style.display = 'none';
      } else {
        alert('У вас недостаточно драконов для скрещивания!');
      }
    });
  
    // Показать меню "Инкубатор"
    incubatorButton.addEventListener('click', function() {
      mainMenu.style.display = 'none';
      incubatorMenu.style.display = 'flex'; // изменяем на flex
    });
  
    // Логика инкубации яйца
    eggImage.addEventListener('click', function() {
      if (egg.style.display !== 'none') {
        let incubationCountdown = 5;
        eggTimer.textContent = `Яйцо вылупится через ${incubationCountdown} секунд`;
        const incubationInterval = setInterval(() => {
          incubationCountdown--;
          eggTimer.textContent = `Яйцо вылупится через ${incubationCountdown} секунд`;
  
          if (incubationCountdown < 0) {
            clearInterval(incubationInterval);
            egg.style.display = 'none';
            dragon3.style.display = 'block';
            eggTimer.textContent = 'Яйцо (нажмите, чтобы инкубировать)';
            alert('Поздравляем! Новый дракон вылупился!');
          }
        }, 1000);
      }
    });
  });
  
