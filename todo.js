document.addEventListener('DOMContentLoaded', () => {

    function isEmpty(input_value){
        // checks if the entry point/text input area is empty
        return input_value === "";
    }

    function addElement(element){
        // this is used to add new item to the todo list
        return (`
        <div class="list-item">
        <input type="checkbox" name="" id="">
        <label>${element.value}</label><br>
        </div>
        `);
    }

    localStorage.setItem("todo", "[]");

    function addTodoToStorage(item){
    }

    function getAllTodo(){

    }
    
    let todo_input = document.getElementById("text");
    let submit = document.getElementById("submit");
    let todo_list = document.getElementById("list-container");

    
    submit.addEventListener("click", () => {
        if (!isEmpty(todo_input.value)){
            let item = addElement(todo_input)
            todo_list.innerHTML += item;
            todo_input.value = "";
        }
    })

    document.addEventListener("keydown", function(event) {
        if (event.key == "Enter"){
            submit.click();
        }
    })

})

// next is local storage

/*
local storage to save todos and the corresponding text data
to have access to it even after closing the browser window
LOCAL STORAGE
*/