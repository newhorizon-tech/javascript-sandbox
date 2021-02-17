const head = document.querySelector('#heading');
const testbutton = document.querySelector('#test');
const body = document.querySelector('body');
const paras = document.querySelectorAll('p');

let counter = 0;

function ParaModify(p, text) {
  p.textContent = text;
}

function BackgroundModify(element, color) {
  element.style.background = color;
}

testbutton.onclick = () => {
  const msg = document.querySelector('#msg').value;
  const color = document.querySelector('#color-input').value;
  const list = document.querySelector('#list');

  const ListItem = document.createElement('li');
  ListItem.innerHTML = msg;

  list.appendChild(ListItem);

  counter += 1;
  head.textContent = `Counter: ${counter}`;

  paras.forEach((p) => {
    ParaModify(p, Math.floor(Math.random() * 100));
  });

  BackgroundModify(body, color);
};
