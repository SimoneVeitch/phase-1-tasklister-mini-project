document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText + " ";
      taskList.appendChild(taskItem);
      taskInput.value = "";
      addDeleteButton(taskItem);
    }
  });

  function addDeleteButton(taskItem) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = " x ";
    taskItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
      taskItem.remove();
    });
  }
});
