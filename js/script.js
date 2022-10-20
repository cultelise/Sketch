let body = document.querySelector('body');
let button = document.createElement('button');
let div = document.createElement('div');

let frag = document.createDocumentFragment();

let answer = prompt('Enter number for grid size', '24');
console.log(answer)
guy(answer)

let s = (16 * answer) + (answer * 2);

body.appendChild(div);
body.appendChild(button);
body.style.justifyContent = 'center';
body.style.flexDirection = 'column';
body.style.gap = '20px';
body.style.alignItems = 'center'
body.style.display = 'flex';
div.style.height = '256px'
div.style.width = '256px'

div.style.height = `${s}px`
div.style.width = `${s}px`

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);}
  }
  
button.textContent = 'Reset'
button.addEventListener('click', () => {
  removeElementsByClass('square');
  console.log()
  let a1 = prompt('Enter number for grid size', '32');
  let s = (16 * a1) + (a1* 2);
  div.style.height = `${s}px`;
  div.style.width = `${s}px`;
  guy(a1);
})


div.style.display = 'flex'
div.style.alignSelf = 'center'
div.style.border = '8px solid red';
div.style.flexWrap = 'wrap'

button.style.color = 'white';
button.style.backgroundColor = 'black'
button.style.fontSize = '24px'
button.style.length = '100px'
button.style.width = '100px'

let div2 = document.querySelector('div2')


function guy(answer) {  
  for (i = 0; i < (answer * answer); i++){
    console.log(answer)
    let div2 = document.createElement('div2');
    div2.style.flex = '0 0 16px'
    div2.classList.add('square')
    div2.style.width = '16px';
    div2.style.height = '16px';
    div2.style.backgroundColor = 'black';
    div2.style.border = '1px solid white';
    frag.appendChild(div2);
    div2.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'blue';
    }) 
  } div.appendChild(frag); 
}

