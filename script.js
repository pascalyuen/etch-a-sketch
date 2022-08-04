const container = document.querySelector('.container');
const button = document.querySelector('.button');
let num = 0;

// Create a 16x16 grid of divs
for (let i = 0; i < 16; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  row.classList.add('grid');

  for (let j = 0; j < 16; j++) {
    const col = document.createElement('div');
    col.classList.add('col');
    col.classList.add('grid');
    row.appendChild(col);
  }

  container.appendChild(row);
  addGridHovering();
}


// Add event listener for button
button.addEventListener('click', getNewGridSize);
button.addEventListener('click', removeOldGrid);
button.addEventListener('click', makeNewGrid);
button.addEventListener('click', addGridHovering);

// Functions
function addGridHovering() {
  const cols = document.querySelectorAll('.col');
  cols.forEach(col => col.addEventListener('mouseenter', enterEvent));
}


function enterEvent(e) {
  e.target.classList.add('hovering');
}


function getNewGridSize(e) {
  num = parseInt(prompt('New grid size: '));
  if (!Number.isInteger(num)) {
    alert('Enter an integer.');
  }
  num = (num >= 100) ? 100 : num;
}


function removeOldGrid(e) {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}


function makeNewGrid(e) {
  for (let i = 0; i < num; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('grid');
  
    for (let j = 0; j < num; j++) {
      const col = document.createElement('div');
      col.classList.add('col');
      col.classList.add('grid');
      row.appendChild(col);
    }
  
    container.appendChild(row);
  }
}