(() => {
function progress() {
  let elem = document.getElementById('progress__line')
  let width = 1
  let id = setInterval(progressStatus, 100)

  function progressStatus() {
    if(width >= 100) {
      clearInterval(id)
    } else {
      width++
      elem.style.width = width + '%'
      elem.textContent = width * 1 + '%'

    }
  }
}

progress()

})()