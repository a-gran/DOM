let text = document.getElementById('text')
let inputWrap = document.getElementById('input-wrap')
let input = document.getElementById('input')

let inputPadding = +window.getComputedStyle(input, null).getPropertyValue('padding-left').slice(0, 2)

let inputWidth
let textWidth

input.addEventListener('keyup', function() {
  text.textContent = this.value
  textWidth = text.offsetWidth
  inputWidth = input.clientWidth - inputPadding

  if (textWidth > inputWidth) {
    inputWrap.classList.add('input-wrap--shadow')
  } else if (inputWrap.classList.contains('input-wrap--shadow')) {
    inputWrap.classList.remove('input-wrap--shadow')
  }
})