// 11/08/23    Учу с Димычем его Новый курс "Переход на ООП"....
//    т.к. я начал делать сам - Сразу через Об. и Ко.-р - у меня немного не вышло во Втором видео так, как у Димки
//       Поэтому в отдельной папке я решил Всё Повторить За Ним

// let buttonStart = document.querySelector('#button_click_1');
// let buttonStart = document.querySelector('#button_click_2');




function buttonStartClick() {
  let randomChoice = Math.random();
  if (randomChoice > 0.5) {
    // Поменял Все alert-вызовы на console.log-и
    console.log('The car started up. There is been a movement.');

    buttonStart.classList.add('hide');

    function carCrashed() {
      console.log('Forced stop');
      buttonStart.classList.remove('hide');
    }
    window.setTimeout(carCrashed, 5000);
    console.log('We wait Crash');
    
  } else {
    console.log('Something went wrong.');
  }
}

let buttonStart = document.querySelector('#button_click_1');
buttonStart.addEventListener('click', buttonStartClick);
