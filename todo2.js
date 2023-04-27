const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask();
});

function addTask() {
  const newTask = document.querySelector('#new-task').value;
  if (newTask === '') {
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox" class="checkbox">
    <div class="task">${newTask}</div>
    <button class="delete-btn">Delete</button>
  `;

  const checkbox = li.querySelector('.checkbox');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  });

  const deleteBtn = li.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  taskList.appendChild(li);
  document.querySelector('#new-task').value = '';
}