document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text">${taskValue}</span>
        <button class="remove-btn">X</button>
    `;

    li.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-btn")) {
            li.remove();
        } else {
            li.classList.toggle("completed");
        }
    });

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}