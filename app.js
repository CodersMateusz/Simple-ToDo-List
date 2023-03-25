const form = document.querySelector('form.add');
const itemToAdd = document.querySelector('#itemToAdd');
const toDoList = document.querySelector('.todo');
const resetBtn = document.querySelector('.hide');
const alert = document.querySelector('.alert-warning');

resetBtn.style.display = 'none';
alert.style.display = 'none';

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const newListItem = createNewListItem(itemToAdd.value);

  if (!itemToAdd.value) {
    alert.style.display = 'block';
  } else {
    alert.style.display = 'none';
    toDoList.appendChild(newListItem);
    itemToAdd.value = '';
    itemToAdd.focus();
    resetBtn.style.display = 'block';
  }
})

const createNewListItem = (val) => {
  const item = document.createElement('li');
  const span = document.createElement('span');
  const delBtn = document.createElement('button');
  
  item.classList.add('list-group-item');
  span.textContent = val;
  span.classList.add('left');
  delBtn.textContent = 'Delete';
  delBtn.classList.add('btn');
  delBtn.classList.add('btn-warning');
  delBtn.classList.add('right');

  item.appendChild(span);
  item.appendChild(delBtn);

  delBtn.addEventListener('click', function() {
    item.parentNode.removeChild(item);
  })

  return item;
}

resetBtn.addEventListener('click', function() {
  toDoList.textContent = '';
  resetBtn.style.display = 'none';
})

new Sortable (toDoList, {
  animation: 500
})


