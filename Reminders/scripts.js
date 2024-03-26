document.addEventListener('DOMContentLoaded', function() {
    let completedCount = 0;
    let pendingCount = 0;
  
    // Sample data for completed reminders (will be dynamic based on user actions)
    const completedReminders = [
      { title: 'Meeting', description: 'Prepare presentation', status: 'completed' },
      { title: 'Assignment', description: 'Complete math assignment', status: 'pending' },
      // ... Add more reminders
    ];
  
    // Update counts and render reminders
    updateCounts();
    renderReminders();
  
    // Handle reminder form submission
    const reminderForm = document.getElementById('reminderForm');
    reminderForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const titleInput = document.getElementById('title');
      const descriptionInput = document.getElementById('description');
      const reminderDateInput = document.getElementById('reminderDate');
      const reminderTimeInput = document.getElementById('reminderTime');
  
      // Get input values
      const title = titleInput.value;
      const description = descriptionInput.value;
      const reminderDate = reminderDateInput.value;
      const reminderTime = reminderTimeInput.value;
  
      // Create new reminder object
      const newReminder = {
        title,
        description,
        status: 'pending' // Newly added reminders are pending by default
        // Add date and time properties here based on your requirement
      };
  
      // Push new reminder to the array (simulating data storage)
      completedReminders.push(newReminder);
  
      // Update counts and render reminders
      updateCounts();
      renderReminders();
  
      // Clear the input fields
      titleInput.value = '';
      descriptionInput.value = '';
      reminderDateInput.value = '';
      reminderTimeInput.value = '';
    });
  
    // Update completed and pending counts
    function updateCounts() {
      completedCount = completedReminders.filter(reminder => reminder.status === 'completed').length;
      pendingCount = completedReminders.filter(reminder => reminder.status === 'pending').length;
  
      // Update the counts in the HTML
      document.getElementById('completedCount').textContent = completedCount;
      document.getElementById('pendingCount').textContent = pendingCount;
    }
  
    // Render reminders in separate boxes
    function renderReminders() {
      const completedRemindersBox = document.querySelector('.completed-reminders-box');
      const pendingRemindersBox = document.querySelector('.pending-reminders-box');
  
      completedRemindersBox.innerHTML = '<h3>Completed Reminders</h3>';
      pendingRemindersBox.innerHTML = '<h3>Pending Reminders</h3>';
  
      completedReminders.forEach(reminder => {
        const reminderBox = document.createElement('div');
        reminderBox.classList.add('reminder-box');
        reminderBox.textContent = `Title: ${reminder.title}, Description: ${reminder.description}`;
  
        if (reminder.status === 'completed') {
          completedRemindersBox.appendChild(reminderBox);
        } else {
          pendingRemindersBox.appendChild(reminderBox);
        }
      });
    }
  });
  