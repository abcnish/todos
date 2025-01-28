const inputBox = document.getElementById("input-box"); // this can take input id 
const listId = document.getElementById("list"); // this can take list id

// we provide onclick function to the button
// what to be done when button is clicked is written here

function addTask()
{
    if(inputBox.value === '') // if input box is empty then alert message will be  shown
    {
        alert("Please enter a task");
    }
    else 
    {
        let li = document.createElement("li"); // else, this code create a new list item
        li.innerHTML = inputBox.value; // input field ma rakheko value li ma halcha
        listId.appendChild(li); // li lai list container ma append garney

        let deleteButton = document.createElement("span"); // delete button create garney
        deleteButton.innerHTML = "\u00d7"; // delete button ma cross sign halcha
        li.appendChild(deleteButton);
    }
    inputBox.value = ''; // input box lai empty garneys
    saveData();
}

listId.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN")
    {
        e.target.parentElement.remove();
        saveData(); 
    }
}, false);// list container ma click garey vaney checked or delete garney

function saveData() // save a data in local storage in browser 
{
    localStorage.setItem("data", listId.innerHTML);
}

function showData() // show data from local storage
{
    listId.innerHTML = localStorage.getItem("data");
}
showData();
// function neet to call to execute its content.....s