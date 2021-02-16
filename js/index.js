const head = document.getElementById('heading');

const testbutton = document.getElementById('test');

const body = document.querySelector("body");

const h1 = document.querySelector("h1");

const paras = document.querySelectorAll("p");


function ParaModify(p, text) {
  p.textContent = "Cool!"
}

function BackgroundModify(element, color){
  element.style.background = color;
}

testbutton.onclick = function() {
  let msg = document.querySelector("#msg").value;
  BackgroundModify(body, "green")
  h1.textContent = msg + "!"
};
