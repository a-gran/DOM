(() => {

window.onscroll = function() {
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop
  let documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  let scrolled = (windowScroll / documentHeight) * 100

  document.getElementById('myBar').style.width = scrolled + '%'
}

})()