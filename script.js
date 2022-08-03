const container = document.querySelector('.container');

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
}

// Add event listener for each of the grids
const cols = document.querySelectorAll('.col');
cols.forEach(col => col.addEventListener('mouseenter', enterEvent));
// cols.forEach(col => col.addEventListener('mouseleave', leaveEvent));


function enterEvent(e) {
  e.target.classList.add('hovering');
}

// function leaveEvent(e) {
//   e.target.classList.remove('hovering');
// }
