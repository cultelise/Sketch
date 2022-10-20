let body = document.querySelector('body');
let button = document.createElement('button');
let div = document.createElement('div');

body.appendChild(div);
body.appendChild(button);
div.style.height = '256px'
div.style.width = '256px'

button.textContent = 'Reset'
button.addEventListener('click', (e) => {
  let answer = prompt('Enter number for grid size', '16');
  let s = (16 * answer) + (answer * 2);
  div.style.height = `${s}px`
  div.style.width = `${s}px`
  for (i = 0; i < (answer * answer); i++){
    let div2 = document.createElement('div2');
    div2.style.flex = '0 0 16px'
    div2.classList.add('square')
    div2.style.width = '16px';
    div2.style.height = '16px';
    div2.style.backgroundColor = 'black';
    div2.style.border = '1px solid white';
    frag.appendChild(div2);
    div2.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'purple';
    })
  } div.appendChild(frag);
})


div.style.display = 'flex'

div.style.border = '8px solid red';
div.style.flexWrap = 'wrap'


let frag = document.createDocumentFragment();


let div2 = document.querySelector('div2')



