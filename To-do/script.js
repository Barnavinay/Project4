document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = () => {
    li.remove();
    removeFromStorage(task);
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  saveToStorage(task);
  taskInput.value = "";
}

function saveToStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeFromStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => {
      li.remove();
      removeFromStorage(task);
    };

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
  });
}
