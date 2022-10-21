let body = document.querySelector('body');
let button = document.createElement('button');
let div = document.createElement('div');
let frag = document.createDocumentFragment();
let shade = 60;
let color = Math.floor(Math.random() * 360);
let answer = prompt('Enter number for grid size', '24');
let s = (16 * answer) + (answer * 2);

grid(answer, shade);

body.appendChild(div);
body.appendChild(button);
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.gap = '20px';
body.style.backgroundColor = 'black';

div.style.height = `${s}px`;
div.style.width = `${s}px`;
div.style.display = 'flex';
div.style.alignSelf = 'center';
div.style.border = '8px solid white';
div.style.flexWrap = 'wrap';

button.style.color = 'black';
button.style.backgroundColor = 'white';
button.style.border = '2px solid red';
button.style.fontSize = '24px';
button.style.fontWeight = 'bold';
button.style.length = '100px';
button.style.width = '100px';

button.textContent = 'Reset';
button.addEventListener('click', () => {
  let shade = 60;
  removeElementsByClass('square');
  let a1 = prompt('Enter number for grid size', '32');
  let s = (16 * a1) + (a1* 2);
  div.style.height = `${s}px`;
  div.style.width = `${s}px`;
  grid(a1, shade);
})

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);}
  }
  
function grid(answer, darkness) {  
  for (i = 0; i < (answer * answer); i++){
    let div2 = document.createElement('div2');
    div2.style.flex = '0 none';
    div2.classList.add('square');
    div2.style.width = '16px';
    div2.style.height = '16px';
    div2.style.backgroundColor = 'white';
    div2.style.border = '1px solid black';
    frag.appendChild(div2);
    div2.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, ${darkness}%)`;
      darkness = darkness - 0.05;
    }) 
  } div.appendChild(frag); 
}
