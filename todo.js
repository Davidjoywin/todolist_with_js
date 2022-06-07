document.addEventListener('DOMContentLoaded', () => {
    
    let todo_input = document.getElementById("text");
    let submit = document.getElementById("submit");
    let todo_list = document.getElementById("list-container");
    let todo_item = document.querySelectorAll(".list-item");
    const HIDE = document.getElementById("hide");
    const CLEAR = document.getElementById("clear");
    

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
        <button class="remove"><span>Remove</span></button><br>
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


    const TODO_STORAGE = getAllTodo(); // todo items from the local storage
    TODO_STORAGE.forEach(item => todo_list.innerHTML += addElement(item));

    let check = document.querySelectorAll("input[type=checkbox]");
    check.forEach(ele_checked => {
        if (ele_checked.checked){
            ele_checked.parentNode.style.display = "none";
        }
        ele_checked.parentNode.style.display = "block";
    })

    function removeFromStorage(pos){
        let todos = JSON.parse(localStorage.getItem("todo"));
        todos.splice(pos, 1);
        localStorage.setItem("todo", JSON.stringify(todos));
        location.reload()
    }

    const itemVisibility = (value) => {
        check.forEach(ele => {
            if (ele.checked) {
                ele.parentNode.style.display = value;
            }
        })
    }

    submit.addEventListener("click", () => {
        if (!isEmpty(todo_input.value)){
            let item = addElement(todo_input.value);
            addTodoToStorage(todo_input.value);
            location.reload();
            todo_list.innerHTML += item
            todo_input.value = "";
        }
    })

    //-------------------------------
    todo_item.forEach(todo => {
        if (todo.childNodes[1].checked == true){
            todo.style.display = 'none';
        }
        else{
            todo.style.display = 'block';
        }
    })
    
    HIDE.addEventListener('click', () => {
        todo_item.forEach(todo => {
            todo.style.display = 'none'
        })
    })
//-----------------------------------------

    CLEAR.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    })

    document.addEventListener("keydown", function(event) {
        if (event.key == "Enter"){
            submit.click();
        }
    })

    const REMOVE = document.querySelectorAll(".remove");

    REMOVE.forEach((rem, key) => rem.addEventListener("click", () => {
        removeFromStorage(key);
    }))

    HIDE.addEventListener("click", () => {
        const HIDE_TEXT = "Hide Done";
        const SHOW_TEXT = "Show Done";
        
        if (HIDE.innerText === HIDE_TEXT) {
            HIDE.innerText = SHOW_TEXT;
            //function to hide items
            itemVisibility("none");
        }
        else{
            HIDE.innerText = HIDE_TEXT;
            itemVisibility("block");
        }
    })
})
