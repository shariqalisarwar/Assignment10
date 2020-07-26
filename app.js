var list = document.getElementById("list")

function addTodo(){
    var todo = document.getElementById("todo-item")

    var li = document.createElement('li')
    var liText = document.createTextNode(todo.value)
    li.appendChild(liText)

    var delbtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(delText)

    var editbtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editbtn.setAttribute("class","edit")
    editbtn.setAttribute("onclick","editItem(this)")
    editbtn.appendChild(editText)

    
    li.appendChild(delbtn)
    li.appendChild(editbtn)

   
    list.appendChild(li)
    
    todo.value = ""
    console.log(li)
}
function deleteItem(e){
    e.parentNode.remove()
}
function deleteall(){
    list.innerHTML = ""
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("enter edit value",val)
    e.parentNode.firstChild.nodeValue = editValue
}
