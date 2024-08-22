function submitForm() {
    const planName = document.getElementById('planName').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const description = document.getElementById('description').value;
    
    // Validate date fields
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (start > end) {
        alert('Start date must be before end date.');
        return;
    }

    // Example of form submission
    alert('The executive plan form has been submitted successfully!');
    clearForm();
}

function saveDraft() {
    const planName = document.getElementById('planName').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const description = document.getElementById('description').value;

    // Save draft (e.g., in local storage or send to a server)
    const draft = {
        planName,
        startDate,
        endDate,
        description
    };

    localStorage.setItem('draft', JSON.stringify(draft));
    alert('The draft has been saved successfully!');
}

function clearForm() {
    document.getElementById('planForm').reset();
}
