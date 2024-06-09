const deletion_task = new Array(); // array which stores the deletion task ids

function deleteSelected() {
    const tasks = document.querySelectorAll('.delete-task');

    // console.log(tasks)

    // Step 2: Convert the NodeList to an array for easier manipulation
    const tasksArray = Array.from(tasks);

    // Step 3: Filter the tasks to include only those that have a checkbox input
    const tasksWithCheckboxes = tasksArray.filter(task => {
        // console.log(task)
        // Check if there is an input element of type 'checkbox' inside the task
         const f = task.querySelector('input[type="checkbox"]');

         if (f.getAttribute('checked')) {
            const id = f.getAttribute('id');
            if (!deletion_task.includes(id)) {
                deletion_task.push(id);
            }
            return true;
        }

    });
    console.log(deletion_task)

    fetch('/delete_tasks', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'  // Corrected the header type which tells the data
        },
        body: JSON.stringify({ taskIds: deletion_task })
    }).then(response => {
        if (response.ok) {
            console.log('Tasks deleted successfully');
            window.location.reload(); // Reload the page to show the updated list
        } else {
            console.log('Failed to delete tasks');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while deleting tasks');
    });

}

let f = document.querySelectorAll('input[type="checkbox');
// console.log(f)

if (f.length > 0) {
    f.forEach(task => {
        task.addEventListener('click', () => {
            if (task.getAttribute('checked') === 'false') {
                task.setAttribute('checked', 'true');
                console.log(task)
            } else {
                task.setAttribute('checked', 'false');
                console.log(task);
            }
        });
    });
}

