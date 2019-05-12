const usersUrl = "https://jsonplaceholder.typicode.com/users";
const todosUrl = "https://jsonplaceholder.typicode.com/todos"
const body = document.querySelector('body')

const getUsers = () => {
const usersReq = new XMLHttpRequest();
usersReq.onload = function () {
    const usersJson = usersReq.response;
    console.log(usersJson);
}
usersReq.open('GET', usersUrl);
usersReq.responseType = 'json';
usersReq.send();
}

getUsers()

const getTodos = () => {
const requestTodos = new XMLHttpRequest();
requestTodos.onload = function () {
    const toDosJson = requestTodos.response;
    console.log(toDosJson)
}
requestTodos.open('GET', todosUrl);
requestTodos.responseType = 'json';
requestTodos.send();
}

getTodos()

const showUserDetails = () => {
  
}