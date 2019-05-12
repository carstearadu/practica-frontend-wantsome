// Aveti 2 functii, una in care o sa luam userii si una in care luam todos
// fiecare todo are o proprietate Id, pentru fiecare Id care este acelasi ca id-ul din users vom printa ce title 
// se potriveste - o sa faceti o verificare aici.
// Afisati in html un paragraph cu numele userilor, emailul si title-ul din todos.

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

const todosCallback = (todos,users) => {
  for (let i = 0; i < todos.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (todos[i].id === users[j].id) {
        displayTitleInParagraph(users[j].name,users[j].email,todos[i].title);
      }
    }
  }
  console.log(todos);
  console.log(users);
}

const displayTitleInParagraph = (name,email,title) => {
  let paragraph = document.createElement('p');
  paragraph.textContent = `${name} (${email}) must ${title}`;
  document.getElementById('toDos').appendChild(paragraph);
}

const usersCallback = (users) => {
  getTodos(users, todosCallback);
}

const getUsers = (callback) => {
  const requestUsers = new XMLHttpRequest();
  requestUsers.open('GET',usersUrl);
  requestUsers.responseType = 'json';
  requestUsers.send();
  requestUsers.onload = function() {
    const UsersJson = requestUsers.response;
    callback(UsersJson);
  }
}

const getTodos = (users, callback) => {
  const requestTodos = new XMLHttpRequest();
  requestTodos.open('GET',todosUrl);
  requestTodos.responseType = 'json';
  requestTodos.send();
  requestTodos.onload = function() {
    const TodosJson = requestTodos.response;
    callback(TodosJson, users);
  }
}

getUsers(usersCallback);