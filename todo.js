document.addEventListener('DOMContentLoaded', () => {

    function addElement(element){
        return 
        `
        <input type="checkbox" name="" id="">
        <label>${element.value}</label><br>
        `
    }

    function isEmpty(input_value){
        return input_value === "";
    }
    
    
    let todo_input = document.getElementById("text");
    let submit = document.getElementById("submit");
    let todo_list = document.getElementById("list-container");

    
    submit.addEventListener("click", () => {
        if (!isEmpty(todo_input.value)){
            todo_list.innerHTML += 
            `
            <div class="list-item">
            <input type="checkbox" name="" id="">
            <label>${todo_input.value}</label><br>
            </div>
            `;
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