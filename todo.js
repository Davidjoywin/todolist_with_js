document.addEventListener('DOMContentLoaded', () => {

    function isEmpty(input_value){
        // checks if the entry point/text input area is empty
        return input_value === "";
    }

    function addElement(element){
        /* 
        this is used to add new item to 
        the todo list using todo dom to creaate 
        new item on the todo list html document
        */
        return (`
        <div class="list-item">
        <input type="checkbox" name="" id="">
        <label>${element}</label>
        <button><span>Remove</span></button><br>
        
        </div>
        `);
    }

    if (!localStorage.getItem("todo")){
        // if todo item is not set, then go ahead and set it.
        localStorage.setItem("todo", "[]"); 
    }

    function addTodoToStorage(item){
        // adding todo to the local storage
        let todos = JSON.parse(localStorage.getItem("todo"));
        todos.push(item);
        localStorage.setItem("todo", JSON.stringify(todos));
    }

    function getAllTodo(){
        // getting todo from local storage
        return JSON.parse(localStorage.getItem("todo"));
    }
    
    let todo_input = document.getElementById("text");
    let submit = document.getElementById("submit");
    let todo_list = document.getElementById("list-container");
    // let todo_item = document.querySelectorAll(".list-item");
    const HIDE = document.getElementById("hide");
    const CLEAR = document.getElementById("clear");

    CLEAR.addEventListener('click', () => {
        let todos = getAllTodo();
        todos = [];
        localStorage.setItem("todo", JSON.stringify(todos));
    })

    const TODO_STORAGE = getAllTodo(); // todo items from the local storage
    TODO_STORAGE.forEach(item => todo_list.innerHTML += addElement(item));
    
    submit.addEventListener("click", () => {
        if (!isEmpty(todo_input.value)){
            let item = addElement(todo_input.value);
            addTodoToStorage(todo_input.value);
            todo_list.innerHTML += item
            todo_input.value = "";
        }
    })

    document.addEventListener("keydown", function(event) {
        if (event.key == "Enter"){
            submit.click();
        }
    })
})