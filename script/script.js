const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addToTask = () => {
    if (inputBox.value === "") {
        alert("Please add a task first");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        const span  = document.createElement("span");
        span.innerHTML = "×";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML)
}

const showData = () => {
    listContainer.innerHTML = localStorage.getItem("data")
}

showData();

const handleClear = () => {
    if (listContainer.innerHTML === "") {
        alert("Nothing to be cleared")
    }
    else{
        listContainer.innerHTML = "";
        saveData();
    }
}