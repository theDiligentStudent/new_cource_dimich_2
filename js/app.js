// 11/08/23    Учу с Димычем его Новый курс "Переход на ООП"....
//    т.к. я начал делать сам - Сразу через Об. и Ко.-р - у меня немного не вышло во Втором видео так, как у Димки
//       Поэтому в отдельной папке я решил Всё Повторить За Ним
// 12/08/23
//       14/08/23 Lesson 3
// 18/08/23    ----
// долго /много дней/ НЕ занимался -  поэтому сейчас попробую повторить весь пройденный (который успел пройти) материал - по памяти

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
      buttonStart.classList.remove('hide');
      statusCar.innerHTML = 'Engine Crashed!';
      statusCar.classList.add('status-color-3');
      buttonStart.innerHTML = 'STOP';
    }
    window.setTimeout(buttonDisappearing, 5000);
  } else {
    statusCar.innerHTML = 'Crash!';
    statusCar.classList.add('status-color-4');
    buttonStart.classList.add('hide');

    function buttonDisappearing() {
      buttonStart.classList.remove('hide');
      statusCar.innerHTML = 'off';
      statusCar.classList.remove('status-color-4');
    }
    window.setTimeout(buttonDisappearing, 2000);
  }
}
