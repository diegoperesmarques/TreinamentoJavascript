var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonelement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade da Rocketset'
];


function renderTodos (){
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodos();