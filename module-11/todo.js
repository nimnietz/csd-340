// initialize an empty array
const todoList = [];

// add function
document.getElementById("add-btn").onclick = function () {
    const input = document.getElementById("todo-input").value.trim();
    if (input) {
        todoList.push(input);
        alert(`Added: "${input}" at position ${todoList.length}`);
        document.getElementById("todo-input").value = ""; // clear input box
    } else {
        alert("Please enter a task!");
    }
};

// delete function
document.getElementById("delete-btn").onclick = function () {
    if (todoList.length > 0) {
        const removed = todoList.pop();
        alert(`Removed: "${removed}"`);
    } else {
        alert("The list is empty!");
    }
};

// display function
document.getElementById("display-btn").onclick = function () {
    const output = document.getElementById("output");
    output.innerHTML = ""; // clear previous output
    if (todoList.length > 0) {
        todoList.forEach((item, index) => {
            const listItem = document.createElement("p");
            listItem.textContent = `${index + 1}. ${item}`;
            output.appendChild(listItem);
        });
    } else {
        output.textContent = "The list is empty!";
    }
};
