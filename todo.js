document.addEventListener('DOMContentLoaded', () => {

    function addElement(element){
        return 
        `
        <input type="checkbox" name="" id="">
        <label>${element.value}</label><br>
        `
    }
cvc
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
    /*

    submit.onclick = () => todo_input.style.color = 'red';

    document.onkeydown = function(event) {
        if (event.key === "enter"){
            submit.click();
        }
*/
})