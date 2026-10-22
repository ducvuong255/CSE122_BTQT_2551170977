function updateCount() {
    let tasks = document.querySelectorAll('#task-list li');
    let completedTasks = document.querySelectorAll('#task-list .task-text.completed');
    let remaining = tasks.length - completedTasks.length;
    document.getElementById('task-count').textContent = 'Còn ' + remaining + ' việc chưa hoàn thành';
}

function addTask() {
    let input = document.getElementById('task-input');
    let text = input.value.trim();
    if (text === '') return;

    let ul = document.getElementById('task-list');
    let li = document.createElement('li');

    let span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;
    span.onclick = function() {
        toggleTask(this);
    };

    let btn = document.createElement('button');
    btn.className = 'btn-delete';
    btn.textContent = 'Xoá';
    btn.onclick = function() {
        deleteTask(this);
    };

    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);

    input.value = '';
    updateCount();
}

function toggleTask(element) {
    element.classList.toggle('completed');
    updateCount();
}

function deleteTask(element) {
    let li = element.parentElement;
    li.remove();
    updateCount();
}

updateCount();
