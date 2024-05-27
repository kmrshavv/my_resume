// Function to open modals
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Function to close modals
function closeModal(modal) {
    modal.style.display = "none";
}

// Event listeners for opening modals
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        openModal(modalId);
    });
});

// Event listeners for closing modals
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        closeModal(this.parentElement.parentElement);
    });
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});
