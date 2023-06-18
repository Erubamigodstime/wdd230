window.addEventListener('DOMContentLoaded', function() {
    const dateField = document.getElementById('date');
    const now = new Date();
    dateField.value = now.toISOString();
});