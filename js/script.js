let body = document.querySelector('body');

let div = document.createElement('div');
body.appendChild(div);

div.style.display = 'flex'
div.style.height = '288px'
div.style.width = '288px'
div.style.border = '8px solid red';
div.style.flexWrap = 'wrap'


let frag = document.createDocumentFragment();

for (i = 0; i < 256; i++){
  let div = document.createElement('div');
  div.style.flex = '0 0 16px'
  div.classList.add('square')
  div.style.width = '16px';
  div.style.height = '16px';
  div.style.backgroundColor = 'black';
  div.style.border = '1px solid white';
  frag.appendChild(div);
}

div.appendChild(frag);

