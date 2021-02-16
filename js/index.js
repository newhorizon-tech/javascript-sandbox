const head = document.getElementById('heading');

const testbutton = document.getElementById('test');

const body = document.querySelector("body");

const h1 = document.querySelector("h1");

const paras = document.querySelectorAll("p");


function ParaModify(p, text) {
  p.textContent = text;
}

function BackgroundModify(element, color){
  element.style.background = color;
}

testbutton.onclick = function() {
  let msg = document.querySelector("#msg").value;
  let color = document.querySelector("#color-input").value;

  h1.textContent = msg + "!";
  let counter = 1;

  for (p of paras) {
    ParaModify(p, counter);
    counter = counter+1;
  }

  BackgroundModify(body, color);

};
