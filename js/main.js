// cambiar de modo (dark o ligth)´
const todos = [];
const btnLight = document.querySelector('#ligth');
const btnDark = document.querySelector('#dark');
const todoCount = document.querySelector('#todo-count');
btnLight.addEventListener('click', () => {
    document.body.classList.add('dark');
    btnDark.classList.remove('disabled');
    btnLight.classList.add('disabled');
});
btnDark.addEventListener('click', () => {
    document.body.classList.remove('dark');
    btnDark.classList.add('disabled');
    btnLight.classList.remove('disabled');
});

// AGREGAR TODOS
const todoList = document.querySelector('#todo-list');
const todoInput = document.querySelector('#todo-text');
const todoBtn = document.querySelector('#todo-btn');
const todoForm = document.querySelector('#todo-form');
 function creationTodo(todo) {
     const elemento = `
                         <li class="todo">
                         <div class="todo__options">
                         <div class="todo__radio" id="todo-radio"></div>
                         <img class="todo__check disabled" src="./images/icon-check.svg" alt="Icon check">
                         <p class="todo__text">${todo}</p>
                         </div>
                         <div id="todo-delete">
                         <img class="todo__icon-delete" src="./images/icon-cross.svg" alt="Icon delete.">
                         </div>
                         </li> 
                        
                         `;
    //    todoList.innerHTML += elemento; 
    todoList.insertAdjacentHTML('afterbegin', elemento);
    todos.push(todo);
    console.log(todos);
    // ELIMINAR TODOS
        const todoDelete = document.querySelector('#todo-delete');
        todoDelete.addEventListener('click', () => {
            todoDelete.parentElement.remove();
            todos.pop(todo);
            showTodoCount();
        });
    // MARCAR COMO COMPLETADO
    const todoRadio = document.querySelector('#todo-radio');  
    const todoCheck = document.querySelector('.todo__check');
    todoRadio.addEventListener('click', () => {
        todoRadio.style="background-image: linear-gradient( to bottom , hsl(192, 100%, 67%),hsl(280, 87%, 65%));";
        todoCheck.classList.toggle('disabled');
    });          
}

// mostrar catidad de todos
 function showTodoCount() {
     todoCount.innerHTML = todos.length;
 }

todoBtn.addEventListener('click', () => {
    const todo = todoInput.value;
    if (todo) {
        creationTodo(todo);
    }
    todoInput.value = '';
    showTodoCount();
});

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = todoInput.value;
    if (todo) {
        creationTodo(todo);
        showTodoCount();
    }
    todoInput.value = '';
});

 
