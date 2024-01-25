const taskinput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const tasklist = document.getElementById('task-list');

addButton.addEventListener('click', function () {//Retrieving the task from the input field.
    const taskText = taskinput.value.trim();
    if (taskText !== '') {//check if the text is not empty.
        const listItem = document.createElement('li');//create a new list item element. 

        const taskSpan = document.createElement('span');//create a span for the task text .
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task-text');

        const deleteButton = document.createElement('button');//create a delete button 
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        //append the task span and delete button to the list item.
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);

        tasklist.appendChild(listItem);
        // cler the input field.
        taskinput.value = '';
    }
});

tasklist.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-button')) {
        const listItem = event.target.parentNode;
        tasklist.removeChild(listItem);
    }
});
