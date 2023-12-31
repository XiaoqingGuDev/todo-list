const todoList = [];

function renderTodoList()
{
  let todoListHTML = '';
  let xx = document.querySelector('.todo-list');
  for (let i = 0; i < todoList.length; i++)
  {
    const { name, dueDate } = todoList[i];
    const html = `
    <div>${name}</div><div> ${dueDate}</div>
      <Button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
      " class="Delete-listItem_button">Delete</Button>   
    `
    todoListHTML += html;
  }
  console.log(todoListHTML);
  xx.innerHTML = todoListHTML;
}

function AddTodo()
{
  const inputElement = document.querySelector('.name-input');
  const dateElement = document.querySelector('.duedate-input');
  const name = inputElement.value;
  const dueDate = dateElement.value;

  //console.log(name);
  //console.log(dueDate);
  if (name.length > 0)
    todoList.push({ name, dueDate }); // todoList.push({ name: name, dueDate: dueDate });

  renderTodoList();

  inputElement.value='';  
}

