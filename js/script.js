let body = document.querySelector('body');
let div = document.createElement('div');
body.appendChild(div);

div.style.display = 'flex'
div.style.height = '288px'
div.style.width = '288px'
div.style.border = '8px solid red';
div.style.flexWrap = 'wrap'

let styleSheets = document.styleSheets;
console.log(styleSheets);

let frag = document.createDocumentFragment();

for (i = 0; i < 256; i++){
  let div = document.createElement('div');
  div.classList.add('square')
  frag.appendChild(div);
}

div.appendChild(frag);

let sheet = window.document.styleSheets[0];
sheet.insertRule('.square {width: 16px; height: 16px; background-color: black; border: 1px solid white; flex: 0 0 16px}')
sheet.insertRule('.square:hover {background-color: blue}');


