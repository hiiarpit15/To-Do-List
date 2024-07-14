document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        newTaskInput.value = '';
    }
});
