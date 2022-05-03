document.addEventListener('DOMContentLoaded', () => {
    
    const todo_input = document.querySelector("#text");
    const submit = document.querySelector("#submit");
    const container = document.querySelector("ul");

    submit.addEventListener("click", () => {
        container.innerHTML += `<input type="checkbox" name="" id=""><label>${todo_input.value}</label><br>`;
        todo_input.value = ""
    })
})

localStorage