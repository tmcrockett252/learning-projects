let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    // Check if input is not empty
    if (taskText !== '') {
        // Add task to the array
        tasks.push({
            id: Date.now(), // Simple unique ID
            text: taskText,
            completed: false
        });
        
        // Clear the input field
        taskInput.value = '';
        
        // Update the display
        displayTasks();
    }
}

// Function to display all tasks
function displayTasks() {
    const taskList = document.getElementById('taskList');
    
    // Clear existing tasks
    taskList.innerHTML = '';
    
    // Loop through tasks and create list items
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        
        listItem.innerHTML = `
            <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
            <div class="task-buttons">
                <button onclick="toggleTask(${task.id})" class="toggle-btn">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onclick="deleteTask(${task.id})" class="delete-btn">Delete</button>
            </div>
        `;
        
        taskList.appendChild(listItem);
    });
}

// Function to toggle task completion
function toggleTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        displayTasks();
    }
}

// Function to delete a task
function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    displayTasks();
}

// Function to handle Enter key press in input field
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayTasks();
});