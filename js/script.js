let body = document.querySelector('body');
let th = document.createElement('th');
let table = document.createElement('table');
body.appendChild(table);


table.style.height = '600px'
table.style.width = '200px'
table.style.border = '8px solid red';


let frag = document.createDocumentFragment();

for (i = 0; i <= 16; i++){
  let th = document.createElement('th');
  th.style.width = '16px';
  th.style.height = '16px';
  th.style.backgroundColor = 'white';
  th.style.border = '8px solid black';
  th.textContent = 'hello world';
  frag.appendChild(th);
  console.log(i);
}

table.appendChild(frag);



let grid = () => { 
  let gridArray = Array(16).fill(((th))); 
  console.log(gridArray);
}
