/*создаем основные переменные*/
let body, num, array, width, context, logo, myElements, analyser, src, height

/*записываем в переменную body элемент body*/
body = document.querySelector('body')

/*указываем количество стобиков наиндикаторе*/
num = 32

/*создаем массив*/
array = new Uint8Array(num * 2)

/*указываем длину стобиков в px*/
width = 10;

/*при нажатии на кнопку мыши в документе*/
window.onclick = function () {

  if (context) return;

  /*удаляем элемент с текстом*/
  body.querySelector('h1').remove()

  /*прописываем цикл, внтури которого будем создавать элементы наших столбиков*/
  for (let i = 0; i < num; i++) {
    logo = document.createElement('div') /*каждый элемент будет записываться внутри переменной logo*/
    logo.className = 'logo' /*для выше созданного элемента мы прописываем класс logo*/
    logo.style.background = 'red' /*прописываем красный цвет фона*/
    logo.style.minWidth = width + 'px' /*указываем его ширину*/
    body.appendChild(logo) /*добавляем элемент во внутрь элемента body*/
  }

  myElements = document.getElementsByClassName('logo')
  context = new this.AudioContext
}




