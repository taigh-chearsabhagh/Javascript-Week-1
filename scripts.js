document.getElementById("div-1").onmouseover = function() {mouseOver()};
document.getElementById("div-1").onmouseout = function() {mouseOut()};


document.getElementById("div-2").onmousedown = function() {mouseDown()};
document.getElementById("div-2").onmouseup = function() {mouseUp()};

document.getElementById("div-3").onclick = function() {onClick()};


function mouseOver() {
  document.getElementById("div-1").className = ('mOver');
}

function mouseOut() {
  document.getElementById("div-1").className = ('mOut');
}

function mouseDown() {
  document.getElementById("div-2").className = ('mDown');
}

function mouseUp() {
  document.getElementById("div-2").className = ('mUp');
}

function onClick() {
  document.getElementById("div-3").innerHTML = ('Clicked')
  document.getElementById("div-3").className = ('onClick')
}
