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


// 25/08/23      Кажется Всё!! Закончил с Экспериментами в своём-Димыном К.-е 
//      Сделал Статус для Коробки Передач - Переключение с нейтрали на Первую Передачу. Добавил этому Статусу Зелёно-жёлтый фон во всё время Работы Двигателя.   


let statusCar = document.querySelector('#car_status');
let buttonStart = document.querySelector('#button_start');
let transmStatus = document.querySelector('#transm_status');

buttonStart.addEventListener('click', onButtonStartClick);

function onButtonStartClick() {
  let fiftyFifty = Math.random();

  if (fiftyFifty > 0.5) {
    statusCar.innerHTML = 'Go!';
    function firstGear() {
      transmStatus.innerHTML = 'First gear';
      transmStatus.classList.add('transm-status-font');
    }
    window.setTimeout(firstGear, 2000);
    statusCar.classList.add('status-color-1');
    buttonStart.classList.add('hide');
    transmStatus.classList.add('transm-color');

    function buttonDisappearing() {
      statusCar.innerHTML = 'Engine Crashed!';
      transmStatus.innerHTML = 'neutral';
      statusCar.classList.add('status-color-2');
      buttonStart.innerHTML = 'STOP';
      buttonStart.classList.add('button-color-1');
      buttonStart.classList.remove('hide');
      transmStatus.classList.remove('transm-color');
      transmStatus.classList.remove('transm-status-font');
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
    statusCar.innerHTML = "Doesn't start!";
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

// let buttonForEnter = document.querySelector('#btn_for_enter');
let buttonForEnter = document.getElementById('btn_for_enter');
// buttonForEnter.addEventListener('click', function(){
//   alert('Hi!');
// });
// buttonForEnter.addEventListener('keydown', onEnterKeyPress);

// function onEnterKeyPress() {
//   if(event.keyCode === 13) {
//     event.preventDefault();
//     alert('Hi!');
//   }
// }
// function onEnterKeyPress() {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     alert('Hi!');
//   }
// }

buttonForEnter.addEventListener('keydown', function (event) {
  // if(event.keyCode === 13) {
  if (event.key === 'Enter') {
    event.preventDefault();
    console.log('Hi!');
    alert('Hi!');
  }
});
