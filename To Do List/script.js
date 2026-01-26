const inputBox=document.querySelector("#inputBox");
const addBtn=document.querySelector("#addBtn");
const todoList=document.querySelector(".todoList");
let editTodo=null;



addBtn.addEventListener('click',function(){
    const inputText=inputBox.value.trim();
    if(inputText.length <= 0){
        alert("write something plss...");
        return false;
    }
    if(addBtn.value === "Edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = " ";
    }
    else{

    


    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    const editBtn = document.createElement("button");
    editBtn.innerText="Edit";
    editBtn.classList.add("btn","editBtn");
    li.appendChild(editBtn);


    
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn","deleteBtn");
    li.appendChild(deleteBtn);



    todoList.appendChild(li);
    inputBox.value="";
    }

})

todoList.addEventListener('click',function(e){
    if(e.target.innerHTML === "Remove"){
        console.log(e.target.parentElement);
        todoList.removeChild(e.target.parentElement);
    }

    else if (e.target.innerHTML === "Edit"){
        inputBox.value=e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value="Edit";
        editTodo=e;
    }

})
