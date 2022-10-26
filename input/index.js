(function(){

  let letters = {}
  let inp = document.getElementById('input-field')
  let val
  let oldVal
  let lastChar

  inp.addEventListener('keyup', function(e) {
    val = this.value      

    if(e.keyCode === 8) {
      lastChar = oldVal.slice(-1).toUpperCase()
      letters[lastChar] = letters[lastChar] - 1

      if(letters[lastChar] === 0) {
        delete letters[lastChar]
      }    
    } else if (e.keyCode >= 65 && e.keyCode <= 90) {
      if(val.length) {
        strToArr(val)
      }
    }

    oldVal = val
    console.log('letters', letters) 
  })

  function strToArr(str) {
    let arr = str.split('')
    let letter = arr[arr.length - 1].toUpperCase()

    if(letters[letter]) {
      letters[letter] = letters[letter] + 1
    } else {
      letters[letter] = 1
    }
  }

})()