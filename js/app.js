// 11/08/23    Учу с Димычем его Новый курс "Переход на ООП"....
//    т.к. я начал делать сам - Сразу через Об. и Ко.-р - у меня немного не вышло во Втором видео так, как у Димки
//       Поэтому в отдельной папке я решил Всё Повторить За Ним
// 12/08/23    
//       14/08/23 Lesson 3



// let buttonStart = document.querySelector('#button_click_1');
// let buttonStart = document.querySelector('#button_click_2');




function buttonStartClick() {
  let randomChoice = Math.random();
  if (randomChoice > 0.5) {
    // Поменял Все alert-вызовы на console.log-и
    console.log('The car started up. There is been a movement.');

    buttonStart.classList.add('hide');
    statusCar1.innerHTML = 'Go!';

    function carCrashed() {
      console.log('Forced stop');
      buttonStart.classList.remove('hide');
    statusCar1.innerHTML = 'Stop';

    }
    window.setTimeout(carCrashed, 5000);

    function againOff() {
      statusCar1.innerHTML = 'off';
    }
    window.setTimeout(againOff, 8000);


    

    console.log('We wait Crash');
  } else {
    console.log('Something went wrong.');
  }

  // function restart() {
  //   statusCar1.innerHTML = 'off';
  // }
  // window.setTimeout(restart, 3000)
}

// function restart() {
//   statusCar1.innerHTML = 'off';
// }
// window.setTimeout(restart, 3000)


let buttonStart = document.querySelector('#button_click_1');
let statusCar1 = document.querySelector('#status_car_1');

buttonStart.addEventListener('click', buttonStartClick);
