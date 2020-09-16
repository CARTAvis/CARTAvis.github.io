//Call in document load event
document.getElementById("banner")
.addEventListener('mousemove', function(e) {
  var x = -(e.pageX + this.offsetLeft) / 50;
  var y = -(e.pageY + this.offsetTop) / 50;
  e.currentTarget.style.backgroundPosition = x + 'px ' + y + 'px';
})
