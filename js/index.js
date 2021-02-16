const head = document.querySelector('#heading');

const testbutton = document.querySelector('#test');

const body = document.querySelector("body");

const h1 = document.querySelector("h1");

const paras = document.querySelectorAll("p");

let counter = 0;


function ParaModify(p, text) {
  p.textContent = text;
}

function BackgroundModify(element, color){
  element.style.background = color;
}

testbutton.onclick = function() {
  let msg = document.querySelector("#msg").value;
  let color = document.querySelector("#color-input").value;

  counter++;

  h1.textContent = "Counter" + counter + ' ' + msg + '!';

  for (p of paras) {
    ParaModify(p, Math.floor(Math.random()*100));
  }

  BackgroundModify(body, color);

};
