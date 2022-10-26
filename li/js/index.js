const list = document.querySelector('.list')
const item = document.querySelector('.item')
const input = document.querySelector('.input')
const add = document.querySelector('.add')
const del = document.querySelector('.del')
const addElem = document.querySelector('.add-elem')

add.addEventListener('click', function () {
  input.value = "Привет"
})

del.addEventListener('click', function () {
  input.value = ""
})

addElem.addEventListener('click', function () {
  let newItem = document.createElement('li')
  newItem.classList.add('item')
  let newInput = document.createElement('input')
  newInput.classList.add('input')
  newItem.append(newInput)
  list.append(newItem)
})

