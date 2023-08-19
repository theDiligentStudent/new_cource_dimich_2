// 11/08/23    Учу с Димычем его Новый курс "Переход на ООП"....
//    т.к. я начал делать сам - Сразу через Об. и Ко.-р - у меня немного не вышло во Втором видео так, как у Димки
//       Поэтому в отдельной папке я решил Всё Повторить За Ним
// 12/08/23
//       14/08/23 Lesson 3
// 18/08/23    ----
// долго /много дней/ НЕ занимался -  поэтому сейчас попробую повторить весь пройденный (который успел пройти) материал - по памяти
      //  19/08/23      Дорабатываю СВОЮ машинку ПО-СВОЕМУ

      // Also 19/08/23  Создаю в В.-е main  НОВУЮ В.-у
      // чтобы мою - УЖЕ ПОЛНОСТЬЮ ГОТОВУЮ - машинку, с этого (готового) момента РЕФАКТОРИТЬ   




let statusCar = document.querySelector('#car_status');
let buttonStart = document.querySelector('#button_start');

buttonStart.addEventListener('click', onButtonStartClick);

function onButtonStartClick() {
  let fiftyFifty = Math.random();

  if (fiftyFifty > 0.5) {
    statusCar.innerHTML = 'Go!';
    statusCar.classList.add('status-color-1');
    buttonStart.classList.add('hide');

    function buttonDisappearing() {
      statusCar.innerHTML = 'Engine Crashed!';
      statusCar.classList.add('status-color-2');
      buttonStart.innerHTML = 'STOP';
      buttonStart.classList.remove('hide');
      buttonStart.classList.add('button-color-1');
    }
    window.setTimeout(buttonDisappearing, 5000);

    function carStop() {
      statusCar.innerHTML = 'Car Stopped';
      statusCar.classList.add('status-color-3');
      buttonStart.innerHTML = 'STOP';
      buttonStart.classList.add('button-color-1');
    }
    window.setTimeout(carStop, 8000);

    function tryAgain() {
      statusCar.innerHTML = 'off';
      statusCar.classList.remove('status-color-1');
      statusCar.classList.remove('status-color-2');
      statusCar.classList.remove('status-color-3');
      statusCar.classList.add('bgc-span');
      buttonStart.innerHTML = 'Start';
      buttonStart.classList.remove('button-color-1');
    }
    window.setTimeout(tryAgain, 10000);
  } else {
    statusCar.innerHTML = 'Doesn\'t start!';
    statusCar.classList.add('status-color-3');
    buttonStart.classList.add('hide');

    function buttonDisappearing() {
      buttonStart.classList.remove('hide');
      statusCar.innerHTML = 'off';
      statusCar.classList.remove('status-color-3');
    }
    window.setTimeout(buttonDisappearing, 2000);
  }
}
