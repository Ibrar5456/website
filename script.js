document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // New: Add event listener for the close menu button
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    closeMenuBtn.addEventListener('click', function() {
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});

function openModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function checkPassword(event) {
    event.preventDefault();
    
    const form = document.getElementById('password-form');
    const accessCode = form.access_code.value;
    const errorMessage = document.getElementById('password-error');
    
    // Change this to your desired access code
    const correctAccessCode = "Rashed2024"; 
    
    if (accessCode === correctAccessCode) {
        // Hide password form and show contact form
        form.style.display = 'none';
        document.getElementById('contact-form').style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        // Show error message
        errorMessage.style.display = 'block';
        form.access_code.value = ''; // Clear the input
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('contact-form');
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    
    // Create email content
    const subject = "Contact Form Submission from " + name;
    const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

    // Open default email client
    window.location.href = `mailto:rashedm524@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show confirmation message
    form.style.display = 'none';
    document.getElementById('confirmation-message').style.display = 'block';
    
    // Reset form
    form.reset();
}

function showContactConfirmation(event, method) {
    const confirmationDiv = document.getElementById('contact-confirmation');
    const confirmationText = document.getElementById('confirmation-text');
    
    if (method === 'email') {
        // Don't prevent default for email as it needs to open email client
        confirmationText.textContent = "Your email will open. Please complete your message there.";
    } else if (method === 'whatsapp') {
        // Don't prevent default for WhatsApp as it needs to open WhatsApp
        confirmationText.textContent = "You will be redirected to WhatsApp to continue the conversation.";
    }
    
    // Show the confirmation message
    confirmationDiv.style.display = 'block';
    
    // Scroll to the confirmation message
    confirmationDiv.scrollIntoView({ behavior: 'smooth' });
    
    // Optionally hide the confirmation after 5 seconds
    setTimeout(() => {
        confirmationDiv.style.display = 'none';
    }, 5000);
}

function openServiceModal(service) {
    let modal;
    if (service === 'consulting') {
        modal = document.getElementById('serviceModal');
    } else if (service === 'digital') {
        modal = document.getElementById('digitalModal');
    } else if (service === 'development') {
        modal = document.getElementById('developmentModal');
    }
    
    if (modal) {
        modal.style.display = 'block';
        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';
    }
}

function closeServiceModal() {
    const consultingModal = document.getElementById('serviceModal');
    const digitalModal = document.getElementById('digitalModal');
    const developmentModal = document.getElementById('developmentModal');
    
    consultingModal.style.display = 'none';
    digitalModal.style.display = 'none';
    developmentModal.style.display = 'none';
    
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
}

// Update the window click handler
window.onclick = function(event) {
    const consultingModal = document.getElementById('serviceModal');
    const digitalModal = document.getElementById('digitalModal');
    const developmentModal = document.getElementById('developmentModal');
    const imageModal = document.getElementById('imageModal');
    
    if (event.target == consultingModal || 
        event.target == digitalModal || 
        event.target == developmentModal) {
        closeServiceModal();
    } else if (event.target == imageModal) {
        closeModal();
    }
}